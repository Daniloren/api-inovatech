const UserSchema = require("../models/userSchema");

const getAll = async (req, res) => {
  console.log("User All");
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};

module.exports = {
  getAll
};
