var express = require('express');
var router = express.Router();
var passport = require('passport');

var pokemonsController = require('../controllers/pokemonsController');

router.get('/', passport.authenticate('jwt', { session: false }), pokemonsController.getPokemons);
router.get('/:id', passport.authenticate('jwt', { session: false }), pokemonsController.getPokemon);
router.post('/', passport.authenticate('jwt', { session: false }), pokemonsController.createPokemon);

module.exports = router;