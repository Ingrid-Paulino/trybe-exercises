import React, { Component } from 'react'

export default class Content extends Component {
  render() {

    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      <main className="main">
        <div className="content">
        {conteudos.map((conteudo) => {
          return (
            <p key={conteudo.bloco} className="boxs">
              O conteudo é: {conteudo.conteudo} <br />
              Status: {conteudo.status} <br />
              Bloco: {conteudo.bloco}
              <br />
              <br />
            </p> 
          )})}
        </div>  
      </main>
    )
  }
}
