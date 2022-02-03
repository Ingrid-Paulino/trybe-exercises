const sinon = require("sinon");
const { expect } = require("chai");
const MoviesModel = require("../../models/movieModel");
const connection = require("../../models/connection");

describe("consulta de todos os filmes do BD", () => {
  describe("quando não existe filme criado", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([[]]);
    });

    after(() => {
      connection.execute.restore();
    });
    it("retorna um array", async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.an("array");
    });

    it("retorna um array vazio", async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.empty;
    });
  });

  describe("quando existe filmes criados", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([
        [
          {
            id: 1,
            title: "Example Movie",
            directed_by: "Jane Dow",
            release_year: 1999,
          },
        ],
      ]);
    });

    after(() => {
      connection.execute.restore();
    });

    it("retorna um array", async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.an("array");
    });

    it("o array não está vazio", async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.not.empty;
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [item] = await MoviesModel.getAll();

      expect(item).to.include.all.keys(
        "id",
        "title",
        "release_year",
        "directed_by"
      );
    });
  });
});