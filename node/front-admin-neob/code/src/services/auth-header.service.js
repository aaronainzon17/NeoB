import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

class AuthHeaderService {
  authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }

  generalauthHeader() {
    var num = Math.random() * (1000000 - 100000) + 100000; 
    var timestamp = (Date.now() + 10000);//Timestamp en millisegundos dentro de 7 secs

    var hash = bcrypt.hashSync(process.env.REACT_APP_AUTH_TOKEN,8);
    const str = hash + " " + timestamp.toString()  + " " + num.toString();

    const token = jwt.sign({secretstr: str}, process.env.REACT_APP_AUTH_SECRET);

    return { headers: {'general-auth' : token} };
  }

}

export default new AuthHeaderService();

/*
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user.accessToken };
    } else {
      return {};
    }
  }*/