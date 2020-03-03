const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../sleep-tracker/sleepTracker-model.js');

// -- MIDDLEWARE -- //

function generateToken(user) {
  const payload = {
      username: user.username,
      department: user.department
  }
  const options = {
      expiresIn: '1d'
  }
  return jwt.sign(payload, process.env.JWT_SECRET || 'duh', options)
}

// /api/auth/register
router.post('/register', (req, res) => {

  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req,res) => {
  const { username, password } = req.body
  if(!username || !password) {
      res.status(403).json({message: 'invalid username and password'})
  }else{
      Users.findByUsername(username)
          .then(user => {
              if(user && bcrypt.compareSync(password, user.password)) {
              const token = generateToken(user)
              res.status(200).json({message: 'login successful', username: username, token})
              }
          })
          .catch(err => {
              console.log(err)
              res.status(500).json({message: 'failed to login'})
          })
  }
})

module.exports = router;