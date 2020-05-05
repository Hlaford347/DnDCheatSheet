import React from 'react';
import skillsList from '../../../data/skills';
import SkillItem from './SkillItem';
import { Box, List } from '@material-ui/core';

const Skills = () => {
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
