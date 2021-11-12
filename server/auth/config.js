var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../data/models/user');

passport.use(new JwtStrategy({
  secretOrKey: 'secret',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, async function(jwtPayload, done) {
  const user = await User.findOne({
    id: jwtPayload.sub
  });
  if (user) {
    return done(null, user);
  }
}));