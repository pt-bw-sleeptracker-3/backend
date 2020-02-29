const router = require('express').Router();
const Users = require('./sleepTracker-model.js');
const authrequired = require('../auth/auth-required-middleware.js');

const restricted = require('../auth/restricted-middleware.js')

router.get('/', authrequired, restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/users', authrequired, (req, res) => {
  Users.find()
  .then(users => {
      res.json(users)
  })
  .catch(err => {
      res.status(500).json({ message: 'Failed to get users' })
  })
})

module.exports = router;