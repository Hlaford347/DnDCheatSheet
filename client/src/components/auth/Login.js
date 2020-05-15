import React, { useState } from 'react';
import {
  FormGroup,
  FormControl,
  TextField,
  Button,
  Paper,
  Container,
  Typography,
  Link,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  header: { marginTop: theme.spacing(2) },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '80%',
  },
  formContainer: { marginTop: theme.spacing(2), padding: '1rem' },
  button: { margin: theme.spacing(2), width: '80%' },
}));

const Login = () => {
  const classes = useStyles();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;
  const emailInvalid = () => {
    console.log('email invalid');
  };
  const passwordInvalid = () => {
    console.log('password invalid');
  };

  const navigateToRegister = () => {};

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Login submit');
  };

  return (
    <Container maxWidth='sm'>
      <Paper>
        <Container className={classes.formContainer}>
          <Typography variant='h4' align='center' className={classes.header}>
            Login
          </Typography>
          <FormGroup>
            <Container align='center'>
              <FormControl className={classes.formControl}>
                <TextField
                  required
                  error={emailInvalid}
                  id='email'
                  name='email'
                  label='Email'
                  value={email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  required
                  error={passwordInvalid}
                  id='password'
                  name='password'
                  label='Password'
                  type='password'
                  onChange={handleChange}
                  value={password}
                />
              </FormControl>
              <Button
                variant='contained'
                onClick={onSubmit}
                className={classes.button}
              >
                Login
              </Button>
            </Container>
            <Box align='center'>
              <Link href='/register' onClick={navigateToRegister}>
                Register new account
              </Link>
            </Box>
          </FormGroup>
        </Container>
      </Paper>
    </Container>
  );
};

export default Login;
