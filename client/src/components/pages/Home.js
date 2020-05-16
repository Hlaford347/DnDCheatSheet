import React, { useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import image from '../../image/4001776922_aaae016ec1_o.jpg';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  Button,
  Box,
  useMediaQuery,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    height: '50vh',
    width: '100%',
  },
  heroPhone: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    height: '90vh',
    width: '100%',
  },
  heroLandscape: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    height: '75vh',
    width: '100%',
  },
  heroTextLandscape: {
    position: 'absolute',
    top: '20%',
    transformX: 'translate(-50%)',
    color: 'white',
  },
  heroText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  },
  gridContainer: {
    marginTop: '1rem',
  },
  card: {
    minHeight: '150px',
  },
});

const Home = () => {
  const classes = useStyles();

  const thinScreen = useMediaQuery('(max-width:600px');
  const landscape = useMediaQuery('(max-height: 400px');

  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div
        className={
          thinScreen
            ? classes.heroPhone
            : landscape
            ? classes.heroLandscape
            : classes.hero
        }
      >
        <div
          className={landscape ? classes.heroTextLandscape : classes.heroText}
        >
          <Typography variant='h2' align='center'>
            Dungeons and Dragons DM Helper Tool
          </Typography>
          <Box align='center'>
            <Button
              variant='contained'
              color='secondary'
              component={Link}
              to='/character'
            >
              Create characters now
            </Button>
          </Box>
        </div>
      </div>
      <Container className={classes.gridContainer}>
        <Grid container spacing={1} justify='space-between'>
          <Grid item xs={12} md={6} align='center'>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant='subtitle1'>Create Players</Typography>
                <br />
                <Typography variant='body2'>
                  Bring your character data over from your game with the easy to
                  use form
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent align='center'>
                <Typography variant='subtitle1'>Character Overview</Typography>
                <br />
                <Typography variant='body2'>
                  Using the cheat sheet, all of your players' data is in the
                  palm of your hand. Quickly see everyone's armor classes, max
                  HP, passive skill values and much more!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Home;
