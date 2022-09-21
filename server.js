const app = require('./src/app');
const PORT = process.env.PORT;
console.log("PORT", process.env.PORT);
console.log("MONGODB_URI", process.env.MONGODB_URI);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
