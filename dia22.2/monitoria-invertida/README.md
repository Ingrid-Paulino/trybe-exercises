# Mentoria Técnica - Leitura de arquivos com módulo fs do Node.js

**Tempo sugerido: 1 hora e 30 minutos**
 - 10 minuntos - Abertura e explicação da case;
 - 50 minuntos - Fazer desenvolvimento em grupos.
 - 30 minutos - Apresentações das soluções desenvolvidas

**Contexto:**

Você foi a pessoa contratada para migrar o sistema de uma loja física para um ecommerce, porém essa loja usa um software muito antigo que registra todas vendas em arquivos txt. Pensando como pessoa desenvolvedora, você decidiu automatizar essa tarefa, usando o módulo fs do Node.js para ler as informações desses arquivos, convertê-las em um json e assim enviar tudo para ser consumida por uma API.

spiral_notepad Passo a passo para Desenvolvimento

1. Desenvolva uma solução usando o módulo fs para criar uma função que leia os três arquivos de texto e crie/escreva os conteúdos nos arquivos .json correspondentes utilizando callbacks. Em seguida, conversem sobre as vantagens e desvantagens dessa forma de resolução.

2. Façam a refatoração do código para utilizar Promises e .then para resolver o problema. Em seguida conversem sobre as vantagens e desvantagens de se utilizar promises e comparem com o comportamento da solução utilizando callbacks. (Não é necessário apagar a resolução anterior, deixem comantada para apresentar).

3. Faça a mesma coisa com async-await.

Dicas: utilizem console.log durante a execução das resoluções para facilitar a visualização da ordem de execução no terminal.