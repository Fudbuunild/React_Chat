import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Grid, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import { Context } from '../index';
import {useAuthState} from 'react-firebase-hooks/auth';

const Navbar = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

    return (
      <div>
        <AppBar color={"secondary"} position="static">
          <Toolbar variant={"dense"}>
            <Grid container justify={"flex-end"}>
              {user ? 
                <Button onClick={() => auth.signOut()} variant={"outlined"}>Login</Button>
                :
                <NavLink to={LOGIN_ROUTE}>
                    <Button variant={"outlined"}>Log out</Button>
                </NavLink>
              }
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  export default Navbar;
  