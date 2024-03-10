import React from 'react';
import { Paper, Typography, Grid, TextField, Button, FormControlLabel, Checkbox, Link } from '@material-ui/core';
import logo from './logo.jpeg'; // Import your logo image
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} sm={6} md={4} lg={3}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <img src={logo} alt="Logo" style={{ width: 100, height: 100, marginBottom: 20 }} />
            </Grid>
            <Grid item>
              <Typography variant="h5" align="center" gutterBottom>
                Login
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ width: '100%' }}>
              <TextField label="Username" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} style={{ width: '100%' }}>
              <TextField label="Password" type="password" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} style={{ width: '100%' }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Remember Me"
              />
            </Grid>
            <Grid item xs={12} style={{ width: '100%' }}>
              <Button variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item xs={12}>
              {/* Use Link from react-router-dom to navigate to the SignUp component */}
              <Typography variant="body2">
                Didn't register? <RouterLink to="/join" variant="body2">Sign Up</RouterLink>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;