// function soma (a1, a2) {
//     let resultado = a1 + a2
//     console.log (resultado)
// }
// soma (5,6)

// function soma(n1, n2) {
//     let resultado = n1 + n2
//     console.log (`Resultado = ${resultado}`)
// }
// soma (10, 25)





// function multiplicar(m1, m2) {
//     let resultado = m1 * m2
//     console.log (`Resultado = ${resultado}`)
// }
// multiplicar (3, 4)





// function saudacao (nome, cidade) {
//     return `Olá, ${nome}! Bem-vindo(a) a ${cidade}.`;
// }
// console.log (saudacao("Ranilo", "Teresina"));






// function nomeCompleto (nome, sobrenome) {
//     return `${nome} ${sobrenome}`
// }
// let completo = nomeCompleto ("Ranilo", "Cabral")
// console.log (completo)





// function nomeCompleto (nome, sobrenome) {
//     return `${nome} ${sobrenome}`
// }
// console.log (nomeCompleto("Ranilo", "Cabral"))





// Exercício 1: Saudação Personalizada
// Escreva uma função que receba o nome e a cidade de uma pessoa e retorne uma saudação no formato:
// "Olá, [nome]! Seja bem-vindo(a) a [cidade]!"

// function saudacao (nome, cidade) {
//     return `Olá, ${nome}! Bem-vindo a ${cidade}.`
// }
// console.log (saudacao("Ranilo", "Teresina"))





// Exercício 2: Detalhes do Produto
// Crie uma função que receba o nome de um produto, a quantidade e o preço unitário, e retorne uma frase com o total da compra no formato:
// "Você comprou [quantidade] [nome](s) pelo total de R$[total]."
// Dica: Use Template Strings para calcular o total diretamente na string.

// function frase (produto, quantidade, preco) {
//     return (`Você comprou ${quantidade} ${produto}(s) pelo total de ${quantidade * preco}`)
// }
// console.log (frase ("camisa", 3, 40))





// Exercício 3: Nota de Aluno
// Escreva uma função que receba o nome de um aluno e sua nota final. A função deve retornar uma mensagem personalizada com o nome e a classificação da nota:
// 90-100: "Excelente"
// 70-89: "Bom"
// 50-69: "Regular"
// 0-49: "Precisa melhorar"

// function nota (nome, resultado) {
//     if (resultado >= 90) {
//         resultado = "excelente"
//     }   else if (resultado >= 70 && resultado < 90) {
//         resultado = "bom"
//     }   else if (resultado >= 50 && resultado < 70) {
//         resultado = "regular"
//     }    else {
//         resultado = "precisa melhorar"
//     }
//     return (`Nome: ${nome}; Resultado: ${resultado}`)
// }
// console.log (nota("Ranilo Cabral", 70))

// Resolução com condição ternária:
// function classificar (nome, nota) {
//     let classificacao = nota >= 90 ? "excelente"
//     : nota >= 70 ? "bom"
//     : nota >= 50 ? "regular"
//     : "precisa melhorar"
// return (`Nome: ${nome}; Nota: ${nota}; Classificação: ${classificacao}`)
// }
// console.log (classificar ("Ranilo Cabral", 89))





// Exercício 4: Mensagem de Envio
// Crie uma função que receba o nome de uma pessoa e a quantidade de dias para entrega de um produto. A função deve retornar uma mensagem usando Template Strings no formato:
// "Olá, [nome]! Seu pedido será entregue em [dias] dia(s)."
// Se o número de dias for 1, imprima "Amanhã" em vez de "1 dia".
// function mensagem (nome, dias) {
//     let prazo = dias === 1 ? "amanhã" : (`em ${dias} dia(s)`)
//     return (`Olá, ${nome}! Seu pedido será entregue ${prazo}.`)
// }
// let mensagemCompleta = mensagem ("Ranilo", 1)
// console.log (`Prazo de entrega: ${mensagemCompleta}`)





// Exercício 6: Mensagem de Boas-vindas com Idade
// Crie uma função que receba o nome de uma pessoa e sua idade. Se a idade for menor que 18, a função deve retornar:
// "[nome], você ainda é menor de idade!"
// Caso contrário, retorne:
// "Bem-vindo(a), [nome]! Você é maior de idade."
// function frase (nome, idade) {
//     if (idade < 18)
//         return (`${nome}, você ainda é menor de idade!`)
//     else
//         return (`Bem-vindo(a), ${nome}! Você é maior de idade.`)
// }
// console.log (frase ("Ranilo", 17))

// Resolução com condição ternária:
// function frase (nome, idade) {
//     return (idade < 18)
//     ? (`${nome}, você ainda é menor de idade!`)
//     : (`Bem-vindo(a), ${nome}! Você é maior de idade.`)
// }
// let fraseCompleta = frase ("Ranilo", 17)
// console.log (`Frase: ${fraseCompleta}`)





// Exercício aula 27: Cálculo de porcentagem
// function calcPct (x, y) {
//     return ((y / x) * 100)
// }
// let x = 90
// let y = 40
// let pct = calcPct (x, y).toFixed(2)
// console.log (`${pct}% de ${x} é ${y}.`)




// Exercício aula 28: Calcule o preço do imóvel
// - area = m2 = 3.000
// - Se tiver 1 quarto, o m2 é 1x
// - Se tiver 2 quartos, o m2 é 1.2x
// - Se tiver 3 quartos, o m2 é 1.5x

// function precoImovel(quartos, area){
//     let m2 = 3000
//     let calculo = quartos === 1 ? m2
//     : quartos === 2 ? m2 * 1.2
//     : quartos === 3 ? m2 * 1.5
//     : m2 * 1.5

//     let valor = calculo * area
//     return (`O imóvel custa R$${valor}.`)
// }
// let preco = precoImovel(1, 50)
// console.log (preco)

// function precoImovel (quartos, metros) {
//     let precoPorMetro = 3000;
//     let preco = 0;
//     switch (quartos) {
//         case 1:
//             preco = metros * precoPorMetro;
//             break;
//         case 2:
//             preco = metros * precoPorMetro * 1.2;
//             break;
//         case 3:
//             preco = metros * precoPorMetro * 1.5;
//             break;
//         default:
//             return "Quantidade de quartos inválida";
//     }
//     return preco
// }
// let preco = precoImovel (3, 123)
// console.log (`A casa custa ${preco}`)






// Exercício aula 29: Crie uma função que valide usuário e senha.
// Usuário correto: ranilo
// Senha correta: 123

// function validar(usuario, senha) {
//     if (usuario === "ranilo" && senha === 123) {return true;}
//     else {return false;}
// }

// let usuario = "ranilo";
// let senha = 123;
// let validacao = validar (usuario, senha);
// if (validacao) {
//     console.log ("Acesso concedido.");
// }   else {
//     console.log ("Acesso negado.");
// }

// function validar(usuario, senha) {
//     if (usuario === "ranilo" && senha === 123) {
//         return true
//     }
// }
// console.log (validar("ranilo", 123))

// function validar (usuario, senha) {
//     if (usuario === "ranilo" && senha === 123) {
//         return ("Acesso concedido")
//     }   else {return ("Acesso negado")}
// }
// let validacao = validar ("ranilo", 123)
// console.log (validacao)





// let frutas = ['uva', 'maca', 'banana', 'laranja']
// console.log (frutas.length)
// frutas.pop()
// console.log (frutas)





// //1. No array abaixo, qual número pega a ferrari?
// let carros = ['BMW', 'Ferrari', 'Mercedes'];
// console.log (carros[1])

// //2. Troque a ferrari por audi
// carros[1] = 'Audi'
// console.log (carros)

// //3. Adicione o Volvo à lista
// carros.push('Volvo');
// console.log (carros)

// //4. Exiba quantos itens tem no array
// console.log (carros.length)




// const personagem = {
//     nome: "Ranilo",
//     idade: 31,
//     pais: "Brasil",
//     olhos: ['castanho', 'preto'],
//     caracteristicas: {
//         forca: 100,
//         magia: 100,
//         stamina: 100
//     },
//     saudacao: function() {
//         return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
//     }
//     };
    
//     console.log(personagem.nome); // Saída: Ranilo
//     console.log(personagem.saudacao()); // Saída: Olá, meu nome é Ranilo e tenho 31 anos.





//Exercícios com arrays
// Crie um Array de Frutas
// Crie um array chamado frutas que contenha pelo menos 5 frutas.
// Exiba no console a segunda fruta do array.
// Adicione uma fruta ao final e outra no início.
// Remova a última fruta e exiba o array atualizado.

// let frutas = ["maçã", "banana", "laranja", "uva", "caju"];
// console.log (frutas)
// console.log (frutas[1])
// frutas.push ("manga")
// frutas.unshift ("pera")
// console.log (frutas)
// frutas.pop ()
// console.log (frutas)






// Manipulação de Elementos em um Array
// Crie um array de números de 1 a 5 e faça as seguintes operações:
// Multiplique cada número por 2 e exiba o novo array.
// Filtre os números maiores que 5 e exiba-os.
// Reduza o array para a soma total de todos os números.

// let numeros = [1, 2, 3, 4, 5]
// console.log (numeros)
// let numerosDobro = numeros.map(n => n * 2)
// console.log (`${numerosDobro}`)
// let numerosFiltrados = numeros.filter(n => n > 5)
// let numerosSomados = numeros.reduce((soma, n) => soma + n)
// console.log (numerosSomados)






// let numeros = [10, 20, 30, 40]
// let numerosSomados = numeros.reduce((acc, valorAtual) => acc + valorAtual, 0)
// console.log(numerosSomados)






// Ordenação de um Array
// Crie um array com nomes de 5 cidades e faça o seguinte:
// Ordene as cidades em ordem alfabética e exiba o array.
// Inverta a ordem das cidades e exiba novamente.








// Busca em um Array
// Crie um array de números de 1 a 10. Escreva uma função que receba um número e retorne se o número está ou não presente no array.








// Exercícios com Objetos
// Crie um Objeto Pessoa
// Crie um objeto pessoa com as propriedades nome, idade, cidade e profissao.
// Exiba cada propriedade no console.
// Altere a cidade para uma nova cidade e adicione uma nova propriedade chamada pais.
// Remova a propriedade profissao e exiba o objeto atualizado.

// let pessoa = {
//     nome: "Ranilo",
//     idade: 31,
//     cidade: "Teresina",
//     profissao: "programador",
//     cores: ["azul", "preto"]
// }
// console.log (pessoa.nome)
// console.log (pessoa.idade)
// console.log (pessoa.cidade)
// console.log (pessoa.profissao)
// for (let n = 0; n < pessoa.length; n++) {
//     console.log (pessoa[n]);
// }






// for (inicio; teste; incr) {
// }

// let cores = ["azul", "preto", "branco", "verde", "amarelo"]
// for (n = 0; n < cores.length; n++) {
//     console.log (`Frase qualquer ` + n)
// }

// for (let n in cores) {
//     console.log(n, cores[n])
// }

// for (let cor of cores) {
//     console.log(cor)
// }






// let cores = [
//     {cor: "verde", qt: 5},
//     {cor: "amarelo", qt: 7},
//     {cor: "preto", qt: 3},
// ]
// for (let cor of cores) {
//     console.log (`A quantidade de cores ${cor.cor} é ${cor.qt}`)
// }







// let frutas = ["maçã", "banana", "laranja"];
// let n = 0; // Inicializamos a variável de contagem fora do loop

// while (n < frutas.length) { 
// console.log(frutas[n]); // Imprime o elemento atual do array
// n++; // Incrementa a variável de contagem para evitar loop infinito
// }

// let numero = 1;
// while (numero <= 10) {
//     console.log (`O número é ${numero}`)
//     numero++;
// }

// let numero = 0;
// while (numero < 15) {
//     console.log (numero)
//     numero++;
// }

// let a = 1;
// while (a <= 34) {
//     console.log (a);
//     a++;
// }







// Exercícios aula 42
// 1. Faça um loop que mostre todas as frutas
// let frutas = ["maça", "uva", "banana"];
// for (n = 0; n < frutas.length; n++) {
//     console.log (frutas[n])
// }

// for (let i in frutas) {
//     console.log (i, frutas[i])
// }

// for (let n of frutas) {
//     console.log (n)
// }

// 2. Conte de 1 até 100 através de um WHILE
// let n = 1
// while (n <= 100) {
//     console.log (n)
//     n++;
// }





// Função para ordenar números:
// let num = [25, 100, 5, 60, 40]
// console.log (num.sort())
// num.sort((a, b) => a - b);
// console.log (num)












