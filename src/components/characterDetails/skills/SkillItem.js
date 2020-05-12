import React from 'react';
import { ListItem, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  listItem: {
    borderBottom: '1px solid black',
  },
  proficient: {
    backgroundColor: '#4dd0e1',
  },
  expert: {
    backgroundColor: '#ffeb3b',
  },
});

const SkillItem = ({ skill, handleButtonPress }) => {
  const classes = useStyle();

  return (
    <ListItem
      button
      onClick={handleButtonPress}
      className={
        classes.listItem +
        ' ' +
        (skill.proficient
          ? classes.proficient
          : skill.expert
          ? classes.expert
          : null)
      }
      name='skill'
    >
      {skill.name}
    </ListItem>
  );
};

export default SkillItem;
