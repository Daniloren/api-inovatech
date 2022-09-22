const UserSchema = require('../models/userSchema');
const bcrypt = require ("bcrypt");

const postLogin = async (req, res) => {
    
    console.log("POST Login");
    console.log (req.body.email);
    console.log (req.body.password);
    try{

    
    UserSchema.findOne({email: req.body.email},function (err, users) {
      if(err) {
        res.status(500).send({ message: err.message })
      }
      console.log("não deu erro");
      if(users) {
        try{
            const senhaValida = bcrypt.compareSync(req.body.password, users.password);
            //req.body.password = hashedPassword;
            if(!senhaValida) {
                res.status(404).send();
            }
            res.status(200).send(users);
            
        }catch(e){
            console.error(e);
        }
    } else{
        console.log("users vazio");
        res.status(404).send();
    }
  
    })
}catch(e) {
    console.error(e);
} 
  };

module.exports = {
    postLogin
};