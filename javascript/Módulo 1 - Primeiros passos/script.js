// let nome = "Amanda"
// let idade = 26
// let nomedocarro = "Ferrari"
// let preçodobolo = 19.99
// let cidade = "São Paulo"

// console.log(nome)
// console.log(idade)
// console.log(nomedocarro)
// console.log(preçodobolo)
// console.log(cidade)



// let nome = "Ranilo";
// let sobrenome = "Cabral";

// let nomeCompleto = nome + " " + sobrenome;

// console.log(nomeCompleto)


// let n1 = 15;
// let n2 = 0;

// let resultado = n1 + n2
// console.log(resultado)


// let idade = 31;

// let idadeString = `${idade} anos`

// console.log(`a sua idade é ${idadeString}`)


// let corCamisa = "amarelo";

// let corCamisaString = `${corCamisa}`;

// console.log (`a sua camisa é ${corCamisa}`);


// let preço = 15.50;
// let preçoString = `${preço} reais`;

// console.log (`${preçoString}`);



// let altura = 1;
// let alturaString = `${altura} metro`;

// console.log (`${alturaString}`);



// let quantidade = 5;
// let quantidadeString = `${quantidade} unidades`;

// console.log (`${quantidadeString}`);


// let nome = "Ranilo";
// let sobrenome = "Cabral";

// let nomeCompleto = `Nome completo: ${nome} ${sobrenome} da Silva`;

// console.log (nomeCompleto);


// let idade = 31;
// let idadeString = `Idade: ${idade + 2} anos`;

// console.log (`${idadeString}`);


// let idade = 26;

// if (idade > 17) {
//     console.log ("Você é maior de idade");
// } else {
//     console.log ("Você é menor de idade");
// }


// Multicondicionais
// let idade = 45

// if (idade >= 18) {
//     if (idade < 60) {
//         console.log ("Você é um adulto")
//     }
// }



// let idade = 59

// if (idade >=18 && idade <60) {
//     console.log ("Você é um adulto")
// }


// let idade = 60

// if (idade < 18) {
//     console.log ("Você é menor de idade")
// }   else if (idade >= 18 && idade < 60) {
//     console.log ("Você é um adulto")
// }   else if (idade >= 60) {
//     console.log ("Você é um idoso")
// }


// let nota = 69

// if (nota >= 90) {
//     console.log ("A")
// }   else if (nota >= 80) {
//     console.log ("B")
// }   else if (nota >= 70) {
//     console.log ("C")
// }   else {
//     console.log ("Reprovado")
// }

// let a = false

// if (a) {
//     console.log ("entra")
// }   else {
//     console.log ("não entra")
// }



// let x = 10;
// let y = 5;

// console.log (x > y);

// let w = "10";
// let z = 10;

// console.log (w === z)

// let a = 10;
// let b = 5

// console.log (a != b)

// let preco = 46

// if (preco > 45) {
//     console.log ("O preço está caro")
// }   else console.log ("O preço está barato")



// let idade = 18;

// // if (idade > 17) {
// //     console.log ("Você é maior de idade");
// // } else {
// //     console.log ("Você é menor de idade");
// // }

// let éAdulto = (idade > 17 ? "Sim" : "Não");
// console.log (éAdulto)



// let éMembro = true;
// let frete = éMembro ? 2 : 10;

// console.log (éMembro ? "Você é membro" : "Você não é membro");
// console.log ("Seu frete é", frete);



// switch
// let profissao = "atleta";
// console.log ("Profissão: " + profissao)

// switch (profissao) {
//     case "fiscal":
//         console.log ("Sua camisa será verde");
//         break;
//     case "bombeiro":
//         console.log ("Sua camisa será vermelha");
//         break;
//     case "policial":
//         console.log ("Sua camisa será azul");
//         break;
//     default:
//         console.log ("Sua camisa será preta");
//         break;
// }

// let dia = "terça";
// console.log ("Dia: " + dia)

// switch (dia) {
//     case "segunda":
//         console.log ("Hoje é Segunda-Feira");
//         break;
//     case "terça":
//         console.log ("Hoje é Terça-Feira");
//         break;
//     case "quarta":
//         console.log ("Hoje é Quarta-Feira");
//         break;
//     default:
//         console.log ("Dia inválido");
//         break;
// }




// Exercício 1: Faixa Etária
// Peça ao usuário para inserir sua idade e imprima uma mensagem com base na faixa etária:

// Se a idade for menor que 13 ou maior que 65, imprima "Você está em uma faixa etária especial."
// Caso contrário, imprima "Você está na faixa etária comum."

// let idade = 26;

// if (idade < 13 || idade > 65) {
//     console.log ("Você está em uma faixa etária especial");
// } else {
//     console.log ("Você está na faixa etária comum");
// }




// Exercício 2: Verificação de Nota
// Peça ao usuário para inserir uma nota de 0 a 100:

// Se a nota for menor que 50, imprima "Reprovado."
// Se a nota for entre 50 e 69 (inclusive), imprima "Aprovado com Média."
// Se a nota for entre 70 e 89 (inclusive), imprima "Aprovado com Boa Média."
// Caso contrário, imprima "Aprovado com Distinção."

// let nota = 100;

// if (nota < 50) {
//     console.log ("Reprovado");
// }   else if (nota >= 50 && nota <= 69) {
//     console.log ("Aprovado com média");
// }   else if (nota >= 70 && nota <= 89) {
//     console.log ("Aprovado com boa média");
// }   else {
//     console.log ("Aprovado com distinção")
// }





// Exercicio 3: neném vai guardar 3 notas e vai verificar a média do aluno:
// se a média for menor do que 6, vai mostrar na tela "o aluno está reprovado"
// se a média ficar entre 6 e 6.9, vai mostrar "o aluno está na media"
// se a média ficar entre 7 e 8.9,  vai mostrar "o aluno está com boa média"
// se a média ficar entre 9 e 10,  vai mostrar "o aluno é especial"

// let nota1 = 6.9;
// let nota2 = 6.9;
// let nota3 = 6.9;

// let média = ((nota1 + nota2 + nota3)/3);
// console.log ("Média = " + média);

// if (média < 6) {
//     console.log ("O aluno está reprovado");
// }   else if (média >= 6 && média < 7) {
//     console.log ("O aluno está na média");
// }   else if (média >= 7 && média < 9) {
//     console.log ("O aluno está com boa média");
// }   else {
//     console.log ("O aluno é especial");
// }



// let idade = 45;

// if (idade >= 0 && idade <= 12) {
//   console.log("Criança");
// } else if (idade >= 13 && idade <= 17) {
//   console.log("Adolescente");
// } else if (idade >= 18 && idade <= 64) {
//   console.log("Adulto");
// } else {
//   console.log("Idoso");
// }



// let nome = "Bonieky";
// let sobrenome = "Lacerda";
// let idade = 90;

// let identificaçãoString = `Seu nome é ${nome} ${sobrenome} e sua idade é ${idade} anos.`
// console.log (identificaçãoString)




// let nome = "Amanda";
// let sobrenome = "Meneses";
// let idade = 26

// let identificação = `Seu nome é ${nome} ${sobrenome} e sua idade é ${idade}.`
// console.log (identificação)



// Exercícios com Template String
// Exercício 1: Saudação Simples
// Crie uma saudação usando Template Strings. Dada uma variável nome, crie uma mensagem que diga "Olá, [nome]! Seja bem-vindo!".

// let nome = "Amanda";
// let saudação = `Olá, ${nome}! Seja bem-vindo!`;
// console.log (saudação);

// Exercício 2: Informações do Produto
// Dadas as variáveis produto, quantidade e precoUnitario, crie uma mensagem usando Template Strings que mostre "Você comprou [quantidade] [produto](s) por R$[total]", onde total é o valor de quantidade * precoUnitario.

// let produto = "camisa";
// let quantidade = 2;
// let precoUnitario = 30;

// let frase = `Você comprou ${quantidade} ${produto}(s) por R$${quantidade * precoUnitario}.`

// console.log (frase)

// Exercício 3: Nota Final e Classificação
// Dadas as variáveis aluno e nota, use Template Strings para imprimir uma mensagem no formato:
// "[aluno] obteve a nota [nota]".

// let aluno = "Ranilo";
// let nota = 10;
// let frase = `${aluno} obteve a nota ${nota}.`
// console.log (frase)

// Exercício 4: Idade e Maioridade
// Dadas as variáveis nome e idade, use Template Strings para imprimir uma mensagem no formato:
// "Você ainda é menor de idade, [nome]." se a idade for menor que 18.
// "Você já é maior de idade, [nome]!" caso contrário.

// let nome = "Amanda";
// let idade = 26;

// if (idade < 18) {
//   console.log (`Você ainda é menor de idade, ${nome}.`)
// } else {
//   console.log (`Você já é maior de idade, ${nome}!`)
// }
// outra forma com operador ternário:
// let nome = "Amanda";
// let idade = 26;
// let mensagem = idade < 18
//   ? `Você ainda é menor de idade, ${nome}.`
//   : `Você já é maior de idade, ${nome}!`
// console.log (mensagem)

// Exercício 5: Previsão de Entrega
// Dadas as variáveis cliente e diasParaEntrega, crie uma mensagem no formato:
// "Prezado [cliente], seu pedido será entregue amanhã." se diasParaEntrega for igual a 1.
// "Prezado [cliente], seu pedido será entregue em [diasParaEntrega] dias." para outros valores.

// let cliente = "Amanda";
// let diasParaEntrega = 4;

// if (diasParaEntrega <= 1) {
//   console.log (`Prezado(a) ${cliente}, seu pedido será entregue amanhã.`)
// } else {
//   console.log (`Prezado(a) ${cliente}, seu pedido será entregue em ${diasParaEntrega} dias.`)
// }
// outra forma com operador ternário:
// let cliente = "Amanda";
// let diasParaEntrega = 4;
// let frase = diasParaEntrega <= 1
//   ? `Prezado(a) ${cliente}, seu pedido será entregue amanhã.`
//   : `Prezado(a) ${cliente}, seu pedido será entregue em ${diasParaEntrega} dias.`;
// console.log (frase);

// Exercício 6: Informações de Conta Bancária
// Dadas as variáveis nome, conta, e saldo, crie uma mensagem usando Template Strings que exiba as informações da conta no formato: "Cliente: [nome] | Conta: [conta] | Saldo: R$[saldo]"

// let nome = "Amanda";
// let conta = 1234;
// let saldo = 10;
// let informações = `Cliente: ${nome} | Conta: ${conta} | Saldo: R$${saldo}`
// console.log (informações)

// Exercício 7: Detalhes de Viagem
// Dadas as variáveis cidadeDestino, diasDeViagem e precoPorDia, crie uma mensagem que diga "Sua viagem para [cidadeDestino] por [diasDeViagem] dias custará R$[total]", onde total é o valor de diasDeViagem * precoPorDia.

// let cidade = "Chicago";
// let dias = 10;
// let precoPorDia = 150;
// let frase = `Sua viagem para ${cidade} por ${dias} dias custará R$${dias * precoPorDia}.`;
// console.log (frase);

// Dadas as variáveis produto, quantidade e precoUnitario, e dado que se o valor da compra for maior que R$100, o cliente terá desconto de 10%, crie uma mensagem usando Template Strings que mostre "Você comprou [quantidade] [produto](s) por R$[valor total]. Você ganhou/não ganhou um desconto de 10%".
// let produto = "camisa";
// let quantidade = 4;
// let precoUnitário = 39;
// let valorTotal = quantidade * precoUnitário
// let desconto = (valorTotal - ((quantidade * precoUnitário)/100) * 10).toFixed(2)//limitar a quantidade de decimais
// if (valorTotal > 100) {
//   console.log (`Você comprou ${quantidade} ${produto}(s) por R$${valorTotal}. Você ganhou um desconto de 10%. Seu preço ficou R$${desconto}.`) 
// } else {
//   console.log (`Você comprou ${quantidade} ${produto}(s) por R$${valorTotal}. Você não ganhou um desconto de 10%.`)
// }

// com operador ternário:
// let produto = "camisa";
// let quantidade = 4;
// let precoUnitario = 30;
// let valorTotal = quantidade * precoUnitario;
// let frase = valorTotal >= 100
//   ? (`Você comprou ${quantidade} ${produto}(s) por R$${valorTotal}. Você ganhou um desconto de 10%.`)
//   : (`Você comprou ${quantidade} ${produto}(s) por R$${valorTotal}. Você não ganhou um desconto de 10%.`)
// console.log (frase)

// Exercício 8: Ficha do Aluno
// Dadas as variáveis nome, disciplina, notas (com 3 notas) e presencas, crie uma ficha de informações do aluno com o formato:
// "Nome: [nome]"
// "Disciplina: [disciplina]"
// "Média das Notas: [mediaNotas]" (onde mediaNotas é a média das notas)
// "Frequência: [presencas]%"
// "Status: Aprovado" se mediaNotas >= 7 e presencas >= 70, ou "Status: Reprovado" caso contrário.

// let nome = "Amanda";
// let disciplina = "Português";
// let nota1 = 7;
// let nota2 = 7;
// let nota3 = 7;
// let media = ((nota1 + nota2 + nota3)/3).toFixed(2)//arredonda a média para duas casas;
// let presencas = 80;
// let status = (media >= 7 && presencas >= 70) ? "Aprovado" : "Reprovado";

// let ficha = `Nome: ${nome}
// Disciplina: ${disciplina}
// Média das notas: ${media}
// Frequência: ${presencas}%
// Status: ${status}`

// console.log (ficha)

// Exercício 9: Fatura Detalhada
// Crie uma fatura para um cliente usando as variáveis cliente, itens (um array de objetos com nome, quantidade, precoUnitario), e desconto (em porcentagem). A fatura deve ser gerada no seguinte formato:
// "Cliente: [cliente]"
// Para cada item, uma linha no formato "[nome] - [quantidade] x R$[precoUnitario] = R$[totalItem]"
// "Desconto: [desconto]%"
// "Total com Desconto: R$[totalComDesconto]", onde totalComDesconto é a soma de todos os itens, com o desconto aplicado.





