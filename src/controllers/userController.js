const UserSchema = require("../models/userSchema");

const getAll = async (req, res) => {
  console.log("Get All");
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};
const getUser = async (req, res) => {
  console.log("Get User");
  UserSchema.findById(req.params.id,function (err, users) {
    console.log (req.params.id);
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};
const getLogin = async (req, res) => {
  console.log("Get Login");
  UserSchema.findById(req.params.id,function (err, users) {
    console.log (req.params.id);
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};
module.exports = {
  getAll, 
  getUser,
  getLogin
};
