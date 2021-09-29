    // App.test.js
    import React from 'react';
    import { render, fireEvent } from '@testing-library/react'; //import
    import App from './App';
    
    // SELETORES
    test('Verificando se existe o campo Email.', () => {
      //getByLabelText - pegará o input de acordo com o texto da label que está associado a ele. Nesse caso o input está relacionado com a label Email
      const { getByLabelText } = render(<App />);
      const inputEmail = getByLabelText('Email');
      expect(inputEmail).toBeInTheDocument();
      expect(inputEmail.type).toBe('email');
    });


    //Buscamos o elemento pelo data-testid e depois verificamos se ele está na tela e se é um botão com o texto Enviar .
  test('Verificando se existe um botão de enviar', () => {
    // Pelo getByTestId pegamos o data-testid do elemento que queremos
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-send'); // aqui cocamos o valor desse data-testid
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button'); // verifica se o tipo é button
    expect(btn).toHaveValue('Enviar'); // verifica se tem o valor escrito no botao
  });

 // test('Verificando se existe um botão', () => {
    //   // getByRole - pega so um elemento, porem temos 2 botoes ent usaremos o getAllByRole
    //   const { getByRole } = render(<App />); 
    //   const btn = getByRole('button');
    //   expect(btn).toBeInTheDocument();
    // });

  test('Verificando se existe dois botões', () => {
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2); //podemos usar os metodos do JEST tambem
  });

  //TESTANDO EVENTOS
  //usamos  o fireEvent 

  test('Verificando se o botão e o campo email estão funcionando.', () => {
    // podemos colocar mais de um metodo na distruturação
    const { getByTestId, getByLabelText } = render(<App />);

    //poderia escrever um email direto, mas coloquei em uma var para o codigo ficar mais organizado
    const EMAIL_USER = 'email@email.com';
    
    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');
  
    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } }); // recebeu dois argumentos; 1°: testo que espera. 2°: valor que sera recebido (event.target.value)
    fireEvent.click(btnSend); // pode receber so um argumento tambem, no caso aqui,simula o clique de quem usa no botão.
    expect(inputEmail).toHaveValue(''); // verifica se depois o valor do input é limpado
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`); //verifica se o h2 contem o determinado texto/valor
  });