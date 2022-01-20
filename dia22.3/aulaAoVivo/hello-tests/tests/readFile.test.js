const { expect } = require('chai');
const sinon = require('sinon');

const fs = require('fs').promises;

const { lerArquivo } = require('../lerArquivo');

describe('Chama a função `lerArquivo`', () => {
  before(() => {
    console.log('=====> antes dos testes')
  });

  after(() => {
    console.log('=====> depois dos testes')
  });


  describe('quando o arquivo é lido com sucesso', () => {
    const CONTENT_FILE = 'Hello, tests!';

    before(() => {
      sinon.stub(fs, 'readFile').resolves(CONTENT_FILE);
    });

    after(() => {
      fs.readFile.restore();
    })

    describe('a resposta', () => {
      it('é uma "string"', async () => {
        const content = await lerArquivo('./arquivo1.txt');

        expect(content).to.be.an('string');
      });

      it('é igual ao conteúdo do arquivo', async () => {
        const content = await lerArquivo('./arquivo1.txt');

        expect(content).to.be.eq(CONTENT_FILE);
      });
    });
  });

  describe('quando ocorrer um erro na leitura do arquivo', () => {
    before(() => {
      sinon.stub(fs, 'readFile').resolves(null);
    });

    after(() => {
      fs.readFile.restore();
    })

    describe('a resposta', () => {
      it('deve ser igual a "null"' , async () => {
        const content = await lerArquivo('./arquivoQueNaoExiste.txt');

        expect(content).to.be.null;
      });
    });
  })
});