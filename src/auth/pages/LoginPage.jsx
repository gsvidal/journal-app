import { useMemo } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';

export const LoginPage = () => {
  const { email, password, handleInputChange } = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({ email, password });
    dispatch(checkingAuthentication());
  };

  const handleGoogleSignIn = () => {
    // console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form action="" onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ my: { xs: 2, md: 3 } }}>
            <TextField
              name="email"
              value={email}
              onChange={handleInputChange}
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              fullWidth
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12} sx={{ my: { xs: 2, md: 3 } }}>
            <TextField
              name="password"
              value={password}
              onChange={handleInputChange}
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              autoComplete="current-password"
            />
          </Grid>

          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                sx={{ py: 2 }}
                variant="contained"
                fullWidth
                type="submit"
              >
                <Typography>Login</Typography>
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                sx={{ py: 2 }}
                variant="contained"
                fullWidth
                onClick={handleGoogleSignIn}
              >
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
