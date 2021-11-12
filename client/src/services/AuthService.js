import axios from 'axios';
import jwt_decode from "jwt-decode";

export default class AuthService {
  register(email, password) {
    axios.post('http://localhost:8081/auth/register', {
      email: email,
      password: password
    });
  }

  login(email, password) {
    axios.post('http://localhost:8081/auth/login', {
      email: email,
      password: password
    }).then((response) => {
      const decodedToken = jwt_decode(response.data);
      console.log(decodedToken);
    });
  }
}