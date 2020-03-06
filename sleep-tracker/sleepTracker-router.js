const router = require('express').Router();
const Users = require('./sleepTracker-model.js');
const jwt = require('jsonwebtoken')

// -- middleware -- //

function validateToken(req,res,next) {
  const token = req.headers.authorization
  if(token) {
      jwt.verify(token, process.env.JWT_SECRET || 'duh', (err, decodedToken) => {
          if(err) {
              res.status(401).json({message: 'token not valid'})
          }else{
              req.username = decodedToken
              next()
          }
      })
  }else{
      res.status(400).json({message: 'no auth token'})
  } 
}

//////////// USER ENDPOINTS ////////////////////////

router.get('/', validateToken, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// -- /api/users gets all users
router.get('/users', validateToken , (req, res) => {
  Users.find()
  .then(users => {
      res.json(users)
  })
  .catch(err => {
      res.status(500).json({ message: 'Failed to get users' })
  })
})

// -- /api/users/:id
router.get('/:id', (req, res) => {
const id = req.params.id
  Users.findById(id)
  .then(users => {
      res.json(users)
  })
  .catch(err => {
      res.status(500).json({ message: 'Failed to get users, testing' })
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