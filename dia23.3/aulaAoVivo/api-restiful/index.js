const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => res.json({ ok: true }));

app.use("/pessoas", require("./controllers/peopleController"));

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));