import { useState } from 'react';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';

const formData = {
  displayName: '',
  email: '',
  password: '',
};

const formValidations = {
  // First array item is the function to evaluate if input field is valid or not and second item is error message
  displayName: [(value) => value.length >= 1, 'Name is required'],
  email: [(value) => value.includes('@'), 'Email has to contain an @'],
  password: [
    (value) => value.length >= 6,
    'Password has to be greater or equal than 6 characters',
  ],
};

export const RegisterPage = () => {
  const {
    formState,
    displayName,
    email,
    password,
    handleInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <AuthLayout title="Register">
      <form action="" onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ my: { xs: 2, md: 3 } }}>
            <TextField
              label="Name"
              type="text"
              placeholder="Your full name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={handleInputChange}
              // double negation (!!) will convert a string to a boolean
              error={formSubmitted && !!displayNameValid}
              helperText={formSubmitted && displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ my: { xs: 2, md: 3 } }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={handleInputChange}
              error={formSubmitted && !!emailValid}
              helperText={formSubmitted && emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ my: { xs: 2, md: 3 } }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={password}
              onChange={handleInputChange}
              error={formSubmitted && !!passwordValid}
              helperText={formSubmitted && passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12}>
              <Button
                type="submit"
                sx={{ py: 2 }}
                variant="contained"
                fullWidth
              >
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
