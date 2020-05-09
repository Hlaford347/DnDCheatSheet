import React from 'react';
import SkillItem from './SkillItem';
import { Box, List } from '@material-ui/core';

const Skills = ({ character, handleButtonPress }) => {
  const { skills } = character;

  return (
    <Box>
      <Box p={2}>
        <List aria-label='main skills list'>
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              skill={skill}
              handleButtonPress={handleButtonPress}
              name='skills'
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Skills;
