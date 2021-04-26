import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {auth} from '../../Firebase/utils';
import './Uppernav.css';


const UpperNav=(props)=> {
  const {currentUser}=props;
  return (
  
        <AppBar className='UpperNavBg'>
        <nav className='alignSpace'>
          <Typography variant="h6"  className='title'>
            Welcome to EWS
          </Typography>
          <div>
            {currentUser && (
                <Button  onClick={()=>auth.signOut()} className='log'>LogOut</Button>
            )}
            {!currentUser && (
            <div>
          <Button><Link to='/SignIn' className='linkStyle'>SignIn</Link></Button>
          <Button ><Link to='/SignUp' className='linkStyle'>SignUp</Link></Button>
          </div>
           )}
           
          {/* <Button ><Link to='/my-account' className='linkStyle'>My Account</Link></Button> */}
          </div>
        </nav>
        </AppBar>
  );
}
UpperNav.defaultProps={
  currentUser:null
}
export default UpperNav;