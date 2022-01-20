const { expect } = require('chai');
const sinon = require('sinon');
const readline = require('readline-sync');

const { calculaArea } = require('../calculaArea');

describe('Executa o script calculaArea', () => {
  describe('quando o valor informado é maior ou igual a zero', () => {
    before(() => {
      sinon.stub(readline, 'questionInt').returns(10);
    });

    after(() => {
      readline.questionInt.restore();
    });

    describe('a resposta', () => {
      it('é um "number"', () => {
        const area = calculaArea();

        expect(area).to.be.an('number');
      });

      it('é igual a "100" quando o lado for "10"', () => {
        const area = calculaArea();

        expect(area).to.be.eq(100);
      });
    });
  });

  describe('Quando o valor informado é menor que zero', () => {
    before(() => {
      sinon.stub(readline, 'questionInt').returns(-4);
    });

    after(() => {
      readline.questionInt.restore();
    });

    it('deve estourar um erro com a mensagem "Valor inválido"', () => {
      expect(calculaArea).to.throw('Valor inválido');
    });
  })
});