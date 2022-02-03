const express = require("express");
const router = express.Router();

const People = require("../models/People");

router
  .get("/", async (_req, res) => {
    const people = await People.getAll();

    res.status(200).json(people);
    //ou
    // res.status(200).json({people});
    // res.status(200).json({ data: people });
  })
  .get("/:id", async (req, res) => {
    const people = await People.getById(req.params.id);

    res.status(200).json(people);
  })
  .put("/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const person = await People.getById(id);

      if (!person) return res.status(404).json({ message: "Não encontrado." });

      const newPerson = { ...person, ...req.body };

      await People.update(id, newPerson);

      return res.status(204).end();
    } catch (err) {
      console.log({ err });
      return res.status(500).json({ message: "Erro no servidor" });
    }
  })
  .patch("/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const person = await People.getById(id);

      if (!person) return res.status(404).json({ message: "Não encontrado." });

      const newPerson = { ...person, ...req.body };

      await People.update(id, newPerson);

      return res.status(204).end();
    } catch (err) {
      console.log({ err });
      return res.status(500).json({ message: "Erro no servidor" });
    }
  });

module.exports = router;