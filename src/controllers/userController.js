const UserSchema = require("../models/userSchema");
const bcrypt = require ("bcrypt");
// qdo buscamos tds os usuários
const getAll = async (req, res) => {
  console.log("Get All");
  UserSchema.find(function (err, users) {
    if(err) {
      // se acontecer algum erro retorna 500
      res.status(500).send({ message: err.message })
    }
    // se estiver tudo certo retona 200 e a lista de usuários
      res.status(200).send(users);
  }) 
};
// busca de usuários cadastrados com id 
const getUser = async (req, res) => {
  console.log("Get User");
  UserSchema.findById(req.params.id,function (err, users) {
    console.log (req.params.id);
    if(err) {
      // qdo dá erro retorna 500
      res.status(500).send({ message: err.message })
    }
    if (!users) {
      // qdo usuario não é encotrado retorna 404
      res.status(404).send({message:"usuário não encontrado"})
    }
    //qdo retorna 200 informação encontrada
    res.status(200).send(users);
  }) 
};
// cria um usuário novo
const saveUser = async (req, res) => {
  //criptografa a senha do usuário
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;
  try {
// mapeando o modelo de usuário do mongoDB
    const newUser = new UserSchema(req.body)
    console.log("NOVO USUARIO CRIADO", newUser);
    const savedUser = await newUser.save()
    console.log("NOVO USUARIO SALVO NO BANCO DE DADOS", savedUser);

//qdo retorna 201 informação gravada
    res.status(201).send({
      message: "Novo usuário criado com sucesso",
      savedUser
    })
    
  } catch(e) {
    // mostrar o erro no console 
    console.error(e)
    res.status(500).send({
      message: e.message
    })
  }
}
// apaga o usuário de acordo com id que recebemos
const deleteUserById = async (req, res) => {
  try {
      const userFound = await UserSchema.findById(req.params.id)

     await userFound.delete()

     res.status(200).json({
         mensagem: `Usuário '${userFound.email}' deletado com sucesso!`
     })

  } catch (err) {
      res.status(400).json({
          mensagem: err.message
      })
  }
} 


module.exports = {
  getAll,
  saveUser,
  getUser,
  deleteUserById
};

