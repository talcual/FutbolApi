

const jwt = require('jsonwebtoken');
const SECRET_KEY = ''

module.exports = {
    login: (req, res) => {
        const { username, password } = req.body;
        if (username === 'admin' && password === 'admin') {
            const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
            return res.json({ token });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    },
    logout: (req, res) => {
        console.log('getById')
        return res.json({});
    },
    profile: (req, res) => {
        
    },
  
}