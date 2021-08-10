const appendPokemon = (pokemon) => {
  let ul = document.querySelector("ul");
  
  let li = document.createElement("li");
  let divNome = document.createElement("div");
  let divImagem = document.createElement("div");
  let img = document.createElement("img");

  divNome.innerHTML = pokemon;
  img.src = uriImagem;
  divImagem.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImagem);

  ul.appendChild(li);
};

const fetchPokemon = () => {
  
};

const requestPokemon = () => {
  
};

window.onload = fetchPokemon();