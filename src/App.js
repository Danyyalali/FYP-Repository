import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './Pages/SignIn/SignIn';
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import ContactUs from "./Pages/ContactUs/ContactUs";
import { auth, handleUserProfile } from './Firebase/utils';
import MainLayout from './Components/MainLayout/MainLayout';
import HomeLayout from './Components/HomeLayout/HomeLayout';
import AboutUs from './Pages/AboutUs/AboutUs';
import SignLayout from './Components/SignLayout/SignLayout';

const initialState = {
  currentUser: null
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }
  authListener = null;

  componentDidMount = async () => {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        })
      }
      this.setState({
        ...initialState
      });
    });
  }
  componentWillUnmount() {
    this.authListener();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => (
            <HomeLayout currentUser={currentUser}>
              <Home />
            </HomeLayout>
          )} />
          <Route exact path='/SignIn' render={() => currentUser ? <Redirect to='/' /> : (
            <SignLayout currentUser={currentUser}>
              <SignIn />
            </SignLayout>

          )} />
          <Route path='/SignUp' render={() => currentUser ? <Redirect to='/' /> : (
            <SignLayout currentUser={currentUser}>
              <SignUp />
            </SignLayout>

          )} />
          <Route path='/Contact Us' render={() => (
            <MainLayout currentUser={currentUser}>
              <ContactUs />
            </MainLayout>
          )} />

          <Route path='/About Us' render={() => (
            <MainLayout currentUser={currentUser}>
              <AboutUs />
            </MainLayout>
          )} />
        </Switch>

      </div>
    );
  }
}
export default App;
