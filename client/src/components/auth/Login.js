import React, { useState, useContext, useEffect } from 'react';
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
import AuthContext from '../../context/auth/authContext';

const useStyles = makeStyles((theme) => ({
  header: { marginTop: theme.spacing(2) },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '80%',
  },
  formContainer: { marginTop: theme.spacing(2), padding: '1rem' },
  button: { margin: theme.spacing(2), width: '80%' },
  error: { color: 'red' },
}));

const Login = (props) => {
  const classes = useStyles();

  const authContext = useContext(AuthContext);
  const [loginError, setLoginErr] = useState('');
  const [emailInvalid, setEmailValid] = useState(false);
  const [passwordInvalid, setPasswordValid] = useState(false);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setEmailValid(true);
      setLoginErr(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const handleValidation = () => {
    setEmailValid(email === '');
    setPasswordValid(password === '');
  };

  const navigateToRegister = () => {};

  const handleChange = (e) => {
    setLoginErr('');
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleValidation();

    if (email === '' || password === '') {
      setLoginErr('Please fill in all fields');
    } else {
      login({ email, password });
    }
  };

  return (
    <Container maxWidth='sm'>
      <Paper>
        <Container className={classes.formContainer}>
          <Typography variant='h4' align='center' className={classes.header}>
            Login
          </Typography>
          {loginError && (
            <Typography variant='h6' align='center' className={classes.error}>
              {loginError}
            </Typography>
          )}
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
