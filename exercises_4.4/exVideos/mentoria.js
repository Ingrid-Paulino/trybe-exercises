const n = 5;
const asterisco = '*'
const espaco = '!';
let ConteudoLinha = '';

for(let linha = 1; linha <= n; linha += 1) {
    for(let colunaVazia = 1; colunaVazia <= n - linha; colunaVazia +=1) {
        ConteudoLinha += espaco;
    }
    for(let colunaCheia = 1; colunaCheia > n - linha; colunaCheia -= 1){
        conteudoLinha += asterisco;
    }
    console.log(ConteudoLinha);
    conteudoLinha = '';
}