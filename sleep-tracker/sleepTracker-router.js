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

// -- /api/users gets all users
router.get('/users', authrequired, (req, res) => {
  Users.find()
  .then(users => {
      res.json(users)
  })
  .catch(err => {
      res.status(500).json({ message: 'Failed to get users' })
  })
})


// -- /api/users/:id * can only change name
router.put("/:id",(req, res) => {
  const changes = req.body;
  Users.update(req.params.id, changes)
  .then(user => {
      if(user) {
       return   res.status(200).json(user);
      } else {
          return res.status(404).json({ message: "The user with the specified ID does not exist." })
      }
  })
  .catch(error => {
      console.log(error)
      res.status(500).json({ error: "The user information could not be modified." })
  })
})


// -- /api/users/userdelete/:id deletes user
router.delete("/userdelete/:id", (req, res) => {
  Users.remove(req.params.id)
  .then(count => {
      if( count > 0 ){
         return res.status(200).json({ message: 'The user has been nuked' })
      } else {
          return res.status(404).json({ message: "The user with the specified ID does not exist." })
      }
  })
  .catch(error => {
      console.log(error) 
          res.status(500).json({ error: "The user could not be removed" })
      })
})

module.exports = router;