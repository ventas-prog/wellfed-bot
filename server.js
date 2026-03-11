const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Wellfed Bot funcionando");
});

app.post("/kommo/webhook", (req, res) => {
  console.log("Mensaje recibido de Kommo:");
  console.log(req.body);

  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
