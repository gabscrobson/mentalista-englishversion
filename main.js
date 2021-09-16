var secretNumber = parseInt(Math.random() * 11);
var tentativas = 3;
var result = document.getElementById("resultado");
var elementTentativas = document.getElementById("tentativas");
elementTentativas.innerHTML = "Attempts: " + tentativas;


function Chutar() {
  var element = document.getElementById("valor")
  var value = parseInt(element.value);
  if (value == secretNumber) {
    result.innerHTML = "You won!";
    secretNumber = parseInt(Math.random() * 11);
    tentativas = 3;
    elementTentativas.innerHTML = "Attempts: " + tentativas;
  }
  else if (value > 10 || value < 0) {
    result.innerHTML = "You must type a number from 0 to 10";
  }
  else {
    tentativas = tentativas - 1;
    if(secretNumber < value){
      if(tentativas == 0) {
        result.innerHTML = "You lost, the number was " + secretNumber;
        tentativas = 3;
        secretNumber = parseInt(Math.random() * 11);
        elementTentativas.innerHTML = "Attempts: " + tentativas; 
      }
      else{
        result.innerHTML = "Nope, the secret number is smaller";
        elementTentativas.innerHTML = "Attempts: " + tentativas;  
      }
    }
    else {
      if(tentativas == 0) {
        result.innerHTML = "You lost, the number was " + secretNumber;
        tentativas = 3;
        secretNumber = parseInt(Math.random() * 11);
        elementTentativas.innerHTML = "Attempts: " + tentativas;
      } 
      else {
        result.innerHTML = "Nope, the secret number is bigger";
        elementTentativas.innerHTML = "Attempts: " + tentativas; 
      }
    }
  }
}

function Resetar() {
  result.innerHTML = "Program restarted, the number was " + secretNumber;
  secretNumber = parseInt(Math.random() * 11);
  tentativas = 3
}

