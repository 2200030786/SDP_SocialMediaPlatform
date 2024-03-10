import React, { useState } from 'react';
import { Paper, Typography, Grid, TextField, Button} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import logo from './logo.jpeg'; // Import your logo image

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [userId, setUserId] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUp = () => {
    // Validate age
    if (age >= 60) {
      alert('Age must be below 60.');
      return;
    }
    // Other validation can be added here before creating the account

    // Assuming successful signup for demonstration
    setSuccessMessage('Account created successfully.');
  };

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
                Sign Up
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ width: '100%' }}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ width: '100%' }}>
              <TextField
                label="User ID"
                variant="outlined"
                fullWidth
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ width: '100%' }}>
              <TextField
                label="Age"
                type="number"
                variant="outlined"
                fullWidth
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ width: '100%' }}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ width: '100%' }}>
              <TextField
                label="Date of Birth"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ width: '100%' }}>
              <Button variant="contained" color="primary" fullWidth onClick={handleSignUp}>
                Sign Up
              </Button>
            </Grid>
            {successMessage && (
              <Grid item xs={12}>
                <Typography variant="body2" color="primary">
                  {successMessage}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              {/* Use Link from react-router-dom to navigate to the Login component */}
              <Typography variant="body2">
                Already have an account? <RouterLink to="/login" variant="body2">Login</RouterLink>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignUp;