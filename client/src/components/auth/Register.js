import React, { useState, useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import {
  FormGroup,
  FormControl,
  TextField,
  Button,
  Paper,
  Container,
  Typography,
  Grid,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  header: { marginTop: theme.spacing(2) },
  formContainer: { marginTop: theme.spacing(2), padding: '1rem' },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
  button: { margin: theme.spacing(1), width: '70%' },
  passwordCheck: { marginTop: theme.spacing(2) },
}));

const Register = (props) => {
  const classes = useStyles();

  const authContext = useContext(AuthContext);
  const [regErr, setRegErr] = useState('');

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setEmailValid(true);
      setRegErr(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const [nameInvalid, setNameValid] = useState(false);
  const [emailInvalid, setEmailValid] = useState(false);
  const [passwordInvalid, setPasswordValid] = useState(false);
  const [password2Invalid, setPassword2Valid] = useState(false);

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleValidation = () => {
    setNameValid(name === '');
    setEmailValid(email === '');
    setPasswordValid(password.length < 6);
    setPassword2Valid(password2 !== password || password === '');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleValidation();

    if (name !== '' && email !== '' && password === password2) {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <Fragment>
      <Container maxWidth='md'>
        <Paper>
          <Container className={classes.formContainer}>
            <Typography variant='h4' align='center'>
              Register
            </Typography>
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      required
                      error={nameInvalid}
                      id='name'
                      name='name'
                      label='Name'
                      value={name}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField
                      required
                      error={emailInvalid}
                      id='email'
                      name='email'
                      label='Email'
                      type='email'
                      value={email}
                      onChange={handleChange}
                      helperText={regErr}
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
                  <FormControl className={classes.formControl}>
                    <TextField
                      required
                      error={password2Invalid}
                      id='password2'
                      name='password2'
                      label='Confirm Password'
                      type='password'
                      onChange={handleChange}
                      value={password2}
                    />
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12} className={classes.passwordCheck}>
                  <Box p={1}>
                    <p>Please make sure to use a unique email address</p>
                    <p>Password must be greater than 6 characters</p>
                  </Box>
                </Grid>
              </Grid>
              <Container align='center'>
                <Button
                  variant='contained'
                  onClick={onSubmit}
                  className={classes.button}
                >
                  Register
                </Button>
              </Container>
            </FormGroup>
          </Container>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default Register;
