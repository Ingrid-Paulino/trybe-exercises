//components/MyContext
import { createContext } from "react";
// 1- criar context api 
// createContext é onde eu vou colocar o meu estado, o que eu quero passar para os meus Components filhos
// defaultValue é um valor padrao
// const MyContext = createContext(defaultValue); 

// como nn vou usar um valor padrao, não irei colocar nada dentro dos parenteses
const MyContext = createContext(); 

export default MyContext;

// NAS LINHAS ACIMA, CRIEI UM CONTEXTO NO REACT
// O createContent cria um component que vai ter um Provider e um Consumer
//Provider colocamos onde queremos começar a prover o estado. No nossso caso colocaremos no GreatGrandmother. - fica no pai
//Consumer colocamos no/nos component onde ira consumir o estado - fica no filho
// quando não tiver um provider, o valor usado sera o defaultValue(valor padrao) - se eu for umasr um provider, eu posso deixar o defaultValue sem nada.
