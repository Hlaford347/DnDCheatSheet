import React, { useContext, Fragment } from 'react';
import Classes from '../../data/classes';
import CharacterContext from '../../context/character/characterContext';
import { Radar } from 'react-chartjs-2';

const SavingThrows = ({ colorsArray }) => {
  const characterContext = useContext(CharacterContext);

  const { characters } = characterContext;

  const chartData = {
    labels: [
      'Strength',
      'Dexterity',
      'Constitution',
      'Intelligence',
      'Wisdom',
      'Charisma',
    ],
    datasets: [],
  };

  // Generates proficiency values based on the level input
  const getProficiencyValue = (level) => {
    return Math.floor((7 + level) / 4);
  };

  // Generates Ability Modifier values based on the ability score input
  const getAbilityModifier = (abilityScore) => {
    return Math.floor((abilityScore - 10) / 2);
  };

  const getSavingThrowValue = (character, ability) => {
    const abilityModifier = getAbilityModifier(character[ability]);
    const classObj = Classes.filter((cl) => {
      return cl.name === character.role;
    });

    if (
      classObj[0].savingThrow.filter((ab) => {
        return ab === ability;
      }).length > 0
    ) {
      return abilityModifier + getProficiencyValue(character.level);
    } else {
      return abilityModifier;
    }
  };

  const createSavingThrowObject = (character) => {
    const savingThrowArr = [];

    chartData.labels.forEach((ab) => {
      savingThrowArr.push(getSavingThrowValue(character, ab.toLowerCase()));
    });

    return savingThrowArr;
  };

  const createCharacterSavingThrowData = (character, index) => {
    const dataObj = {
      label: character.name,
      backgroundColor: `${colorsArray[index]} 0.2)`,
      borderColor: `${colorsArray[index]} 1)`,
      data: createSavingThrowObject(character),
    };

    return dataObj;
  };

  characters.forEach((character, index) => {
    chartData.datasets.push(createCharacterSavingThrowData(character, index));
  });

  return (
    <Fragment>
      <Radar
        data={chartData}
        height={200}
        width={200}
        options={{
          maintainAspectRatio: false,
          scale: { ticks: { suggestedMin: 0, suggestedMax: 10 } },
        }}
      />
    </Fragment>
  );
};

export default SavingThrows;
