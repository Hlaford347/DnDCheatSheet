import React, { Fragment, useContext, useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core/';
import PropTypes from 'prop-types';
import CharacterContext from '../../context/character/characterContext';

const CharacterItem = ({ character }) => {
  const { id, name, race, subrace, level, skills, role } = character;

  const characterContext = useContext(CharacterContext);

  const { deleteCharacter, setCurrent, clearCurrent } = characterContext;

  useEffect(() => {
    setCurrent(character);
    // eslint-disable-next-line
  }, []);

  const removeCharacter = () => {
    deleteCharacter(id);
    clearCurrent();
    handleClose();
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Box>
        <Grid container spacing={0} justify='space-between'>
          <Grid item xs={2}>
            <strong>{name}</strong>
          </Grid>
          <Grid item xs={2}>
            Race: {subrace ? subrace : race}
          </Grid>
          <Grid item xs={2}>
            Class: {role}
          </Grid>
          <Grid item xs={2}>
            Level: {level}
          </Grid>
          <Grid item xs={2}>
            {skills.map((skill) => {
              if (skill.proficient) {
                return skill.name + ', ';
              }
              return null;
            })}
          </Grid>
          <Grid item>
            <Button
              color='secondary'
              variant='contained'
              onClick={handleClickOpen}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Delete this user?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure that you want to delete this character? This action is
            irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
          <Button onClick={removeCharacter} color='secondary'>
            Delete Character
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired,
};

CharacterItem.defaultProps = {
  character: {
    id: 1,
    name: '',
    level: 0,
    role: null,
    skills: [],
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
};

export default CharacterItem;
