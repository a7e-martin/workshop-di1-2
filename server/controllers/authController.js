const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

class AuthController {
  
  async register(request, response) {
    const user = await authService.register(request.body.email, request.body.password);
    const payload = {
      sub: user.id,
      email: user.email
    }
    const token = jwt.sign(payload, 'secret');
    response.status(200).send(token);
  }

  async login(request, response) {
    const data = request.body;
    const user = await authService.login(data.email, data.password);
    if (user !== undefined) {
      // User est ok, je peux transmettre le JWT
      const payload = {
        sub: user.id,
        email: user.email
      }
      const token = jwt.sign(payload, 'secret');
      response.status(200).send(token);
    } else {
      // User est undefined, on renvoit 403
      response.status(403).send();
    }
  }
}

module.exports = new AuthController();