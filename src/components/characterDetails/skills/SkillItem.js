import React, { useState, useContext } from 'react';
import { ListItem, makeStyles } from '@material-ui/core';
import CharacterContext from '../../../context/character/characterContext';

const useStyle = makeStyles({
  listItem: {
    borderBottom: '1px solid grey',
  },
  proficient: {
    backgroundColor: '#4dd0e1',
  },
  expert: {
    backgroundColor: '#ffeb3b',
  },
});

const checkSkills = (value) => {
  return value;
};

const SkillItem = ({ skill }) => {
  const characterContext = useContext(CharacterContext);
  const { updateCharacter } = characterContext;

  const classes = useStyle();
  const [char, setChar] = useState({
    id: null,
    name: '',
    level: 0,
    skills: [],
    role: 'Fighter',
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  });

  const { skills } = char;

  let count;

  const btnClick = (e) => {
    e.preventDefault();
    const skillToAdd = e.target.innerText;
    if (skills.filter(checkSkills).length < 2) {
      skills.push(skillToAdd);

      setChar({ ...char, skills: skills });
      console.log(char);
    } else {
      const removedSkill = skills.filter((skill) => skill !== skillToAdd);
      setChar({ ...char, skills: removedSkill });
    }
    count = skills.filter((skill) => skill === skill).length;

    console.log(count);
    updateCharacter(char);
  };

  return (
    <ListItem button onClick={btnClick} className={classes.listItem}>
      {skill}
    </ListItem>
  );
};

export default SkillItem;
