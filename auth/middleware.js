const jwt = require('jsonwebtoken');

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

  module.exports = { 
      generateToken,
      validateToken
  }