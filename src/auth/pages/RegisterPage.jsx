import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form action="">
        <Grid container>
          <Grid item xs={12} sx={{ my: { xs: 2, md: 3 } }}>
            <TextField label="Name" type="text" placeholder="Your full name" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ my: { xs: 2, md: 3 } }}>
            <TextField label="Email" type="email" placeholder="email@gmail.com" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ my: { xs: 2, md: 3 } }}>
            <TextField label="Password" type="password" placeholder="password" fullWidth />
          </Grid>

          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12}>
              <Button sx={{ py: 2 }} variant="contained" fullWidth>
                <Typography>Create account</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 2 }}>Already have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Log in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
