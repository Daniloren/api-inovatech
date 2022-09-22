const UserSchema = require("../models/userSchema");
const bcrypt = require ("bcrypt");

const getAll = async (req, res) => {
  console.log("Get All");
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users);
  }) 
};
const getUser = async (req, res) => {
  console.log("Get User");
  UserSchema.findById(req.params.id,function (err, users) {
    console.log (req.params.id);
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users);
  }) 
};

const saveUser = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;
  try {

    const newUser = new UserSchema(req.body)
    console.log("NOVO USUARIO CRIADO", newUser);
    const savedUser = await newUser.save()
    console.log("NOVO USUARIO SALVO NO BANCO DE DADOS", savedUser);


    res.status(201).send({
      message: "Novo usuário criado com sucesso",
      savedUser
    })
    
    
  } catch(e) {
    console.error(e)
  }
}

module.exports = {
  getAll,
  saveUser,
  getUser
};

