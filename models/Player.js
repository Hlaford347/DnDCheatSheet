const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  subrace: {
    type: String,
    required: false,
  },
  level: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  skills: {
    type: [{ name: String, proficient: Boolean, expert: Boolean }],
    required: true,
    default: [
      {
        name: 'Acrobatics',
        proficient: false,
        expert: false,
      },
      {
        name: 'Animal handling',
        proficient: false,
        expert: false,
      },
      {
        name: 'Arcana',
        proficient: false,
        expert: false,
      },
      {
        name: 'Athletics',
        proficient: false,
        expert: false,
      },
      {
        name: 'Deception',
        proficient: false,
        expert: false,
      },
      {
        name: 'History',
        proficient: false,
        expert: false,
      },
      {
        name: 'Insight',
        proficient: false,
        expert: false,
      },
      {
        name: 'Intimidation',
        proficient: false,
        expert: false,
      },
      {
        name: 'Investigation',
        proficient: false,
        expert: false,
      },
      {
        name: 'Medicine',
        proficient: false,
        expert: false,
      },
      {
        name: 'Nature',
        proficient: false,
        expert: false,
      },
      {
        name: 'Perception',
        proficient: false,
        expert: false,
      },
      {
        name: 'Performance',
        proficient: false,
        expert: false,
      },
      {
        name: 'Persuasion',
        proficient: false,
        expert: false,
      },
      {
        name: 'Religion',
        proficient: false,
        expert: false,
      },
      {
        name: 'Sleight of hand',
        proficient: false,
        expert: false,
      },
      {
        name: 'Stealth',
        proficient: false,
        expert: false,
      },
      {
        name: 'Survival',
        proficient: false,
        expert: false,
      },
    ],
  },
  strength: {
    type: Number,
    required: true,
  },
  dexterity: {
    type: Number,
    required: true,
  },
  constitution: {
    type: Number,
    required: true,
  },
  intelligence: {
    type: Number,
    required: true,
  },
  wisdom: {
    type: Number,
    required: true,
  },
  charisma: {
    type: Number,
    required: true,
  },
  maxHP: {
    type: Number,
    required: true,
  },
  armorClass: {
    type: Number,
    required: true,
  },
  languages: {
    type: Array,
    required: false,
    default: ['Common'],
  },
});

module.exports = mongoose.model('player', PlayerSchema);
