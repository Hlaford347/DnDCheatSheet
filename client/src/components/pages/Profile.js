import React, { useContext, useEffect, useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Typography,
  FormGroup,
  TextField,
  FormControl,
  Box,
  Button,
} from '@material-ui/core';
import CharacterContext from '../../context/character/characterContext';
import AuthContext from '../../context/auth/authContext';

const useStyles = makeStyles({
  profileCard: {
    marginTop: '2rem',
  },
  formGroup: {
    width: '30%',
  },
  button: { marginTop: '1rem' },
});

const Profile = () => {
  const classes = useStyles();
  const characterContext = useContext(CharacterContext);
  const authContext = useContext(AuthContext);

  const { characters, getCharacters } = characterContext;

  const [changeErr, setChangeErr] = useState('');

  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [password2Invalid, setPassword2Invalid] = useState(false);

  const handleChange = (e) => {};
  const handleClick = (e) => {
    if (password < 6) {
      setChangeErr('Password is not long enough');
      setPasswordInvalid(true);
    } else if (password !== password2) {
      setChangeErr('Passwords do not match');
      setPasswordInvalid(true);
    } else {
      console.log('Will modify');
    }
  };

  useEffect(() => {
    loadUser();
    getCharacters();
  }, []);

  const { user, loadUser } = authContext;

  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  return (
    <Container>
      <Card className={classes.profileCard}>
        <CardContent>
          <Typography variant='h4' align='center'>
            {user ? `${user.name}'s Profile` : null}
          </Typography>
          <Typography variant='body1' align='center'>
            You currently have{' '}
            {characters.length > 0
              ? characters.length > 1
                ? `${characters.length} players in your toolkit.`
                : `${characters.length} player in your toolkit`
              : `no players in your toolkit yet.`}
          </Typography>
          <br />
          <br />
          <Typography variant='h5' align='left'>
            Change password
          </Typography>
          <Box align='left'>
            <FormGroup className={classes.formGroup}>
              <FormControl>
                <TextField
                  required
                  error={passwordInvalid}
                  id='password'
                  name='password'
                  label='Password'
                  type='password'
                  onChange={handleChange}
                  value={password}
                  helperText={changeErr}
                />
              </FormControl>
              <FormControl>
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
              <Button
                className={classes.button}
                variant='contained'
                onclick={handleClick}
              >
                Change Password
              </Button>
            </FormGroup>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
