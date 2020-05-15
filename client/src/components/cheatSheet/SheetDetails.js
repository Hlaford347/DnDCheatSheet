import React, { Fragment, useContext } from 'react';
import CharacterContext from '../../context/character/characterContext';
import { Radar } from 'react-chartjs-2';

const SheetDetails = ({ colorsArray }) => {
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

  const createCharacterAbilityData = (character, index) => {
    const dataObj = {
      label: character.name,
      backgroundColor: `${colorsArray[index]} 0.2)`,
      borderColor: `${colorsArray[index]} 1)`,
      data: [
        character.strength,
        character.dexterity,
        character.constitution,
        character.intelligence,
        character.wisdom,
        character.charisma,
      ],
    };

    return dataObj;
  };

  characters.forEach((character, index) => {
    chartData.datasets.push(createCharacterAbilityData(character, index));
  });

  return (
    <Fragment>
      <Fragment>
        <Radar
          data={chartData}
          height={200}
          width={200}
          options={{
            maintainAspectRatio: false,
            scale: { ticks: { suggestedMin: 0 } },
          }}
        />
      </Fragment>
      <Fragment></Fragment>
    </Fragment>
  );
};

export default SheetDetails;
