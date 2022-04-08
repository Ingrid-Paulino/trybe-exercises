class Data {
  constructor(public dia: number, public mes: number, public ano: number) {
      const dataStr = `${ano}-${mes}-${dia}`

      //verifica se a data é válida
      if (new Date(dataStr).getDate() !== dia) {
        dia = 1;
        mes = 1;
        ano = 1900;
      }

      this.dia = dia,
      this.mes = mes,
      this.ano = ano
  }
  //Pq no exemplo tem esse monte de set?
}

const testDate = new Date(29, 1, 1989)

console.log(testDate);
