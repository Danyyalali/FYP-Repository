import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { auth, signInWithGoogle } from '../../Firebase/utils';
import './SignIn.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="https://www.google.com" className='signInLink2'>
        E-Commerce With Scrapping EWS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const initialState = {
  email: '',
  password: '',
}

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState
      });
    }
    catch (error) {
      // console.log(error);
    }
  }
  render() {
    const { email, password } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className='paper'>
          <Avatar className='avatar'>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3" className='coloring'>
            Sign In
        </Typography>
          <form className='form' noValidate onSubmit={this.handleSubmit}>
            <TextField
              type='email'
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name='email'
              value={email}
              onChange={this.handleChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              label="Password"
              type="password"
              name='password'
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className='SignInButton'
            >
              Sign In
          </Button>

            <Grid container className='linkContainer'>
              <Grid item xs>
                <Link to="/forgot-password" variant="body2" className='signInLink'>
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2" className='signInLink'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Button variant="contained" className='googleBtn' fullWidth onClick={signInWithGoogle}>
              Sign In with Google
          </Button>

          </form>
        </div>
        <Box mt={8} mb={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }

}

export default SignIn;