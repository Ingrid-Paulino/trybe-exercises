const sinon = require("sinon");
const { expect } = require("chai");

const MoviesModel = require("../../models/movieModel");
const MovieService = require("../../services/movieService");

describe("consulta de todos os filmes do BD", () => {
  describe("quando não existe filme criado", () => {
    before(() => {
      sinon.stub(MoviesModel, "getAll").resolves([]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });
    it("retorna um array", async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.an("array");
    });

    it("retorna um array vazio", async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.empty;
    });
  });

  describe("quando existe filmes criados", () => {
    before(() => {
      sinon.stub(MoviesModel, "getAll").resolves([
        {
          id: 1,
          title: "Example Movie",
          directedBy: "Jane Dow",
          releaseYear: 1999,
        },
      ]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it("retorna um array", async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.an("array");
    });

    it("o array não está vazio", async () => {
      const response = await MovieService.getAll();

      expect(response).to.be.not.empty; // empty === vazio
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [item] = await MovieService.getAll();

      expect(item).to.include.all.keys(
        "id",
        "title",
        "releaseYear",
        "directedBy"
      );
    });
  });
});