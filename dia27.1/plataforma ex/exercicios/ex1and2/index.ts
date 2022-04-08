class Estudante {
//   private matricula: string;
  private _nome: string;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];

  
  constructor(readonly _matricula: string, n: string) {
      this._matricula = _matricula;
      this._nome = n;
      this._notasProvas = [];
      this._notasTrabalhos = [];
  }

//   get matricula() {
//     return this._matricula;
//   }

  get nome() {
    console.log(`nome: ${this._nome}`);
    return this._nome;
  }

  get notasProvas() {
    console.log(`notas das provas: ${this._notasProvas}`);
    return this._notasProvas;
  }

  get notasTrabalhos() {
    console.log(`notas dos trabalhos: ${this._notasTrabalhos}`);
    return this._notasTrabalhos;
  }

  set notasProvas(NOTASPROVAS: number[]) {
    console.log(`sem mudança das notas da prova: ${this._notasProvas}`);
    
    this._notasProvas = NOTASPROVAS;
    console.log(`mudança de notas da prova: ${this._notasProvas}`);
  }

  set notasTrabalhos(NOTASTRABALHOS: number[]) {
    console.log(`sem mudança das notas do trabalho: ${this._notasTrabalhos}`);
    this._notasTrabalhos = NOTASTRABALHOS;
    console.log(`mudança de notas do trabalho: ${this._notasProvas}`);
  }

  sunNotes(): number {
    const somaProva = this.notasProvas.reduce((a, b) => a + b, 0)
    const somaTrabalho = this.notasTrabalhos.reduce((a, b) => a + b, 0)
    const result = somaProva + somaTrabalho;
    console.log(`A soma das suas notas é: ${result}`);
    return result
  }

  avarageNotes(): number {
      const sumNotes = this.sunNotes();
      const lengthNotes = this.notasProvas.length + this.notasTrabalhos.length;
      console.log(`media: ${sumNotes / lengthNotes}`);
      return sumNotes / lengthNotes;
  }
}

const estudante1 = new Estudante('132545465454', 'Julia')

// console.log(estudante1._nome); //nn aceita pois tecebe o metodo privado
console.log(estudante1._matricula);

console.log('-------------------');
console.log(estudante1);
estudante1.notasProvas = [1, 2, 3]
console.log(estudante1.notasProvas);
console.log(estudante1);

console.log(estudante1.sunNotes());