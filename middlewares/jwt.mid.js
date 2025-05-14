
const jwt = require('jsonwebtoken');
const SECRET_KEY = '($%&#$%&#$%(%&$"%"#$%"#$%"#&$#&$%/&#$%$&#$'

function authToken(req, res, next) {
 
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }
  
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid token.');
    }

    req.user = decoded;
    
    next();

  })

}

module.exports = authToken;