const router = require('express').Router();
const bcrypt = require('bcryptjs');
const authorize = require('./auth-required-middleware.js');

const Users = require('../sleep-tracker/sleepTracker-model.js');

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

router.post('/login', (req, res) => {
  let { username, password } = req.body;


  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.loggedin = true;
        res.status(200).json({ message: `Welcome ${user.username}! have a... biscuit.`, });
      } else {
        res.status(401).json({ message: 'Nice try. But, no. Try. Try again.' });
      }
    })
    .catch(error => {   
      res.status(500).json(error);
    });
});


module.exports = router;