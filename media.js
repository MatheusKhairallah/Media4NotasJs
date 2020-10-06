alert("Digite suas 4 notas abaixo");

let nota1= prompt("Nota 1");
let nota2= prompt("Nota 2");
let nota3= prompt("Nota 3");
let nota4= prompt("Nota 4");

let resultado= (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;

if(nota1>10.0 || nota2>10.0 || nota3>10.0 || nota4>10.0)
alert("Digite somente notas entre 0 e 10");
else if(nota1<0.0 || nota2<0.0 || nota3<0.0 || nota4<0.0)
alert("Digite somente notas entre 0 e 10");
else if(resultado<5.0)
alert(`Você ficou com média ${resultado} Resultado: reprovado`);
else if(resultado>5.0 && resultado<7.0)
alert(`Você ficou com média ${resultado} Resultado: recuperação`);
else if(resultado>7.0)
alert(`Você ficou com média ${resultado} Resultado: aprovado`);