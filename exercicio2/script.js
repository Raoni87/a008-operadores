let num1 = prompt("Me fale um número");
let num2 = prompt("Me fale um outro número");

console.log("o primeiro número é maior do que o segundo?", num1 > 2);
console.log("O primeiro número é igual ao segundo?", num1 === num2);
console.log("O primeiro número é divisível pelo segundo?", Boolean(num1 % num2)===0);
console.log("O segundo número é divisível pelo primeiro?", Boolean(num2 % num1)===0);
