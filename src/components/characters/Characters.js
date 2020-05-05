import React, { Fragment, useContext, useState } from 'react';
import CharacterContext from '../../context/character/characterContext';
import CharacterItem from './CharacterItem';
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    backgroundColor: '#b0bec5',
  },
});

const Characters = () => {
  const classes = useStyles();
  const characterContext = useContext(CharacterContext);
  const [value, setValue] = useState(1);

  const { characters } = characterContext;

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const countOfCharacters = Object.entries(characters).length;

  return (
    <Fragment>
      <AppBar position='static' color='inherit' className={classes.root}>
        <Tabs
          onChange={handleChange}
          aria-label='character names'
          value={value}
          variant='scrollable'
          scrollButtons='auto'
        >
          {characters.map((character, index) => (
            <Tab
              key={character.id}
              value={index + 1}
              label={character.name}
              {...a11yProps(index)}
            />
          ))}
          <Tab value={countOfCharacters + 1} label='Add Character' />
        </Tabs>
        {characters.map((character, index) => (
          <TabPanel value={value} index={index + 1} key={character.id}>
            <CharacterItem character={character} key={character.id} />
          </TabPanel>
        ))}
      </AppBar>
    </Fragment>
  );
};

export default Characters;
