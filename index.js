const express = require('express');
const app = express();
const port = 5000;


app.use(express.json());

const bcrypt = require('bcrypt');   
const saltRounds = 10;
const myplainText = "ReskillAmericans123";
let keepHash;

bcrypt.hash(myplainText, saltRounds)   
  .then(hash => {
      keepHash = hash;
  })
  .catch(err => {
      console.log(err)
  }) 


  app.post('/checkPassword', (req, res) => { 
      let password = req.body.pass
      bcrypt.compare(password, keepHash)
      .then(result  => {
          return res.json(result)
      })  
      .catch(err => {
          return res.json(err)
      }) 
});     
 



app.listen(port, () => console.log('app started'));