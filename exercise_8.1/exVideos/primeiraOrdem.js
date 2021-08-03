function mostraVeiculoMarca(veiculo, marca) {
  console.log(`O veiculo ${veiculo} é da marca ${marca}`);
}

mostraVeiculoMarca('Fusca', 'Volks');
mostraVeiculoMarca('Corsa', 'BM');

const mostraVeiculo = mostraVeiculoMarca;
console.log(mostraVeiculo); 
mostraVeiculo('Chavette', 'GM');