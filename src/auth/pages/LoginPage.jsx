//import './LoginPage.css';

import GoogleIcon from '@mui/icons-material/Google';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form action="">
        <Grid container>
          <Grid item xs={12} sx={{ my: { xs: 2, md: 3 } }}>
            <TextField label="Email" type="email" placeholder="email@gmail.com" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ my: { xs: 2, md: 3 } }}>
            <TextField label="Password" type="password" placeholder="password" fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button sx={{ py: 2 }} variant="contained" fullWidth>
                <Typography>Login</Typography>
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button sx={{ py: 2 }} variant="contained" fullWidth>
                <GoogleIcon />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
