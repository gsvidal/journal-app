//import './LoginPage.css';

import GoogleIcon from '@mui/icons-material/Google';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid item className="box-shadow" xs={3} sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>

        <form action="">
          <Grid container>
            <Grid item xs={12} sx={{ my: 2 }}>
              <TextField label="Email" type="email" placeholder="email@gmail.com" fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ my: 2 }}>
              <TextField label="Password" type="password" placeholder="password" fullWidth />
            </Grid>

            <Grid container spacing={2} sx={{ my: 2 }}>
              <Grid item xs={12} sm={6}>
                <Button sx={{py: 2}} variant="contained" fullWidth>
                  <Typography>Login</Typography>
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button  sx={{py: 2}} variant="contained" fullWidth>
                  <GoogleIcon />
                    <Typography sx={{ml: 1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                Create account
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
