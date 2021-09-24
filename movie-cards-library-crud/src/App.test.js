import React from 'react'
import { render } from '@testing-library/react'
import App from './App';
describe('MovieList', () => {
  test('Renderiza "Carregando..." quando a aplicação é iniciada', () => {
    const { getByText } = render( <App /> );
    expect(getByText('Carregando...')).toBeInTheDocument();
    // expect(getByText('maitte')).toBeInTheDocument(); testando o teste para ver se ele esta funcionando, aqui ele da falso, e o teste esta correto. nao esta dando falso positivo
    // expect(getByText(/carReganDo/i')).toBeInTheDocument();  é sencitive, não importa se esta em maiuscula ou minuscula, e nao é necessario colocar a frase exatamente como esta
  })

  it('Exibe o primeiro filme', () => {
    render(<App />);
    expect(getByText('Kingsglaive')).to
  })
})
