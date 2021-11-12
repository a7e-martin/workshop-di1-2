const User = require('../data/models/user')

class AuthService {
  async register(email, password) {
    const user = await User.create({
      email: email,
      password: password
    });
    return user;
  }

  async login(email, clearPassword) {
    const user = await User.findOne({
      where: {
        email: email
      }
    });

    const passwordMatched = await user.verifyPassword(clearPassword);
    if (passwordMatched) {
      return user;
    } else {
      return undefined;
    }
  }
}

module.exports = new AuthService();