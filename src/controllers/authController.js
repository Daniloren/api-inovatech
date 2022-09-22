const UserSchema = require('../models/userSchema');

const postLogin = async (req, res) => {
    console.log("POST Login");
    console.log (req.body.email);
    console.log (req.body.password);
    UserSchema.findOne({email: req.body.email,password:req.body.password},function (err, users) {
      if(err) {
        res.status(500).send({ message: err.message })
      }
      console.log("não deu erro");
      if(users) {
          res.status(200).send(users);
        }
        else{
          console.log("users vazio");
          res.status(404).send();
        }
  
    }) 
  };

module.exports = {
    postLogin
};