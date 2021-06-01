const express = require('express');
const app = express();
const crypto = require('crypto');
const port = 5000;
const jwt = require('jsonwebtoken')
app.use(express.json());
const secret = "supERduPErBIGscreen";


const bcrypt = require('bcrypt');   
const saltRounds = 10;
const myplainText = "ReskillAmericans123";


bcrypt.hash(myplainText, saltRounds)   
  .then(hash => {
      console.log(hash);
  });

  app.post('/create-token', (req, res) => {    
    const payload = {
        username: req.body.username,
        id: req.body.id
    };
    
    const expiry = 36000   
    jwt.sign(payload, secret, {expiresIn: expiry}, (err, token) => {
        if (err) {
            return res.status(500).json({err})
        }else {
            return res.status(200).json({token})
        }
    })     
}) 



app.listen(port, () => console.log('app started'));