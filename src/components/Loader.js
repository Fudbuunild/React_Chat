import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Grid, Button, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Loader = () => {
      return (
        <Container>
        <Grid container 
              style={{height: window.innerHeight - 50}}
              alignItems={"center"}
              justify={"center"}
              >
             <Grid
              container 
              alignItems={"center"}
              direction={"column"}  
              >  
                 <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
             </Grid>
        </Grid>
      </Container>
      );
    }
export default Loader;    