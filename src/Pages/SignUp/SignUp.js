import { React, Component } from 'react';
import {
  Avatar, Button, CssBaseline, TextField,
  Grid, Box, Typography, Container
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { auth, handleUserProfile } from '../../Firebase/utils';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to='/' className='signInLink2'>
        E-Commerce With Scrapping EWS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const initialState = {
  DisplayName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: [],
  mailError: '',
}
class SignUp extends Component {
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    // console.log(e);
  }
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleFormSubmit = async event => {

    event.preventDefault();
    const { DisplayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      const err = ['Password Don\'t match'];
      this.setState({ errors: err });
      return;
    }
    if (password.length < 6) {
      const err = ['Password must be atleast 6 characters'];
      this.setState({ errors: err });
      return;
    }
    if(password.length>5 || (password===confirmPassword)){
      this.setState({errors:""});
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await handleUserProfile(user, { DisplayName });
      this.setState({
        ...initialState
      });
    }
    catch (error) {
      this.setState({ mailError: error.message });
    }
  }
  render() {
    const { DisplayName, email, password, confirmPassword, errors, mailError } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h4" className='coloring'>
            Sign up
          </Typography>
          <Typography>
            {errors.length > 0 && (
              <ul className='ErrorStyle'>
                {errors.map((err, index) => {
                  return (
                    <li key={index}>
                      {err}
                    </li>
                  )
                })}
              </ul>
            )
            }
            {mailError.length > 0 && (
              <span className='ErrorStyle'>{mailError}</span>
            )}


          </Typography>
          <form className="form" onSubmit={this.handleFormSubmit} autoComplete='off'>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="DisplayName"
                  name='DisplayName'
                  value={DisplayName}
                  label="Full Name"
                  onChange={this.handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type='email'
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  name='email'
                  value={email}
                  label="Email Address"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  name='password'
                  value={password}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={this.handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className='SignInButton'
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/SignIn" variant="body2" className='signUpLink'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }

}
export default SignUp;