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
////////////// SLEEPDATA ENDPOINTS /////////////////////////////


// -- /api/sleepdata
router.get('/sleepdata', validateToken, (req, res) => {
  Users.findSleepData()
  .then(sleepData => {
      res.json(sleepData)
  })
  .catch(err => {
      res.status(500).json({ message: 'Failed to get sleep data' })
  })
})


// -- /api/sleepdata/:id
router.get('/sleepdata/:id', (req, res) => {
  const id = req.params.id
  Users.findByIdSleepData(id)
  .then(users => {
      res.json(users)
  })
  .catch(err => {
      res.status(500).json({ message: 'Failed to get Sleep Data' })
  })
})


// -- /api/sleepdata/:id
router.post('/sleepdata/:id', (req, res) => {
  const data = req.body
  Users.addSleepData({...data, user_id: req.params.id})
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// -- /api/users/sleepdata/:id
router.put("/sleepdata/:id",(req, res) => {
  const changes = req.body;
  Users.updateSleepData(req.params.id, changes)
  .then(user => {
      if(user) {
       return   res.status(200).json(user);
      } else {
          return res.status(404).json({ message: "The data with the specified ID does not exist." })
      }
  })
  .catch(error => {
      console.log(error)
      res.status(500).json({ error: "The data information could not be modified." })
  })
})


// -- /api/users/sleepdatadelete/:id
router.delete("/delete/:id", (req, res) => {
  Users.removeSleepData(req.params.id)
  .then(count => {
      if( count > 0 ){
         return res.status(200).json({ message: 'The data has been nuked' })
      } else {
          return res.status(404).json({ message: "The data with the specified ID does not exist." })
      }
  })
  .catch(error => {
      console.log(error) 
          res.status(500).json({ error: "The data could not be removed" })
      })
})

module.exports = router;