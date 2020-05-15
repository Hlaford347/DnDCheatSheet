const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');
const Player = require('../models/Player');

// @route GET api/characters
// @desc  Get all users characters
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const players = await Player.find({ user: req.user.id }).sort({ name: 1 });
    res.json(players);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/characters
// @desc Add new player
// @access Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('race', 'Race is required').not().isEmpty(),
      check('level', 'Level is required').not().isEmpty(),
      check('role', 'Role is required').not().isEmpty(),
      check('strength', 'Strength is required').not().isEmpty(),
      check('dexterity', 'Dexterity is required').not().isEmpty(),
      check('constitution', 'Constitution is required').not().isEmpty(),
      check('intelligence', 'Intelligence is required').not().isEmpty(),
      check('wisdom', 'Wisdom is required').not().isEmpty(),
      check('charisma', 'Charisma is required').not().isEmpty(),
      check('maxHP', 'Max HP is required').not().isEmpty(),
      check('armorClass', 'Armor Class is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      race,
      subrace,
      level,
      role,
      skills,
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma,
      maxHP,
      armorClass,
      languages,
    } = req.body;

    try {
      const newPlayer = new Player({
        name,
        race,
        subrace,
        level,
        role,
        skills,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        maxHP,
        armorClass,
        languages,
        user: req.user.id,
      });

      const player = await newPlayer.save();

      res.json(player);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route PUT api/characters/:id
// @desc Update player
// @access Private
router.put('/:id', auth, async (req, res) => {
  const {
    name,
    race,
    subrace,
    level,
    role,
    skills,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    maxHP,
    armorClass,
    languages,
  } = req.body;

  // Build player object
  const playerFields = {};
  if (name) playerFields.name = name;
  if (race) playerFields.race = race;
  if (subrace) playerFields.subrace = subrace;
  if (level) playerFields.level = level;
  if (role) playerFields.role = role;
  if (skills) playerFields.skills = skills;
  if (strength) playerFields.strength = strength;
  if (dexterity) playerFields.dexterity = dexterity;
  if (constitution) playerFields.constitution = constitution;
  if (intelligence) playerFields.intelligence = intelligence;
  if (wisdom) playerFields.wisdom = wisdom;
  if (charisma) playerFields.charisma = charisma;
  if (maxHP) playerFields.maxHP = maxHP;
  if (armorClass) playerFields.armorClass = armorClass;
  if (languages) playerFields.languages = languages;

  try {
    let player = await Player.findById(req.params.id);

    if (!player) {
      return res.status(404).json({ msg: 'Player not found' });
    }

    // Make sure user owns player
    if (player.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    player = await Player.findByIdAndUpdate(
      req.params.id,
      { $set: playerFields },
      { new: true }
    );

    res.json(player);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route DELETE api/characters/:id
// @desc Auth user & get token
// @access Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let player = await Player.findById(req.params.id);

    if (!player) {
      return res.status(404).json({ msg: 'Player not found' });
    }

    // Make sure user owns player
    if (player.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Player.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Player removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
