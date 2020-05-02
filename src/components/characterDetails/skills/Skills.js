import React, { useState, useContext } from 'react';
import skillsList from '../../../data/skills';
import SkillItem from './SkillItem';
import { Box, List } from '@material-ui/core';
import CharacterContext from '../../../context/character/characterContext';

const Skills = () => {
  const characterContext = useContext(CharacterContext);

  const { addCharacter, setCharacter } = characterContext;

  const [char, setChar] = useState({
    skills: [],
  });

  return (
    <Box>
      <Box p={2}>
        <List aria-label='main skills list'>
          {skillsList.map((skill) => (
            <SkillItem key={skill} skill={skill} />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Skills;
