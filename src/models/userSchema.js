const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: false,
  },
  endereco: {
    type: String,
    required: false,
  },
  numero: {
    type: String,
    required: false,
  },
  bairro: {
    type: String,
    required: false,
  },
  cidade: {
    type: String,
    required: false,
  },
  estado: {
    type: String,
    required: false,
  },
  cep: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("user", userSchema);
