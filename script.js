var player = prompt('Digite Seu nick: ')
alert('Olá ' + player + ' Quando descobrir o valor, basta recarregar a página para reiniciar o jogo!')
var numeroSecreto = parseInt(Math.random() * 101);

function Chutar() {


var elementResult = document.getElementById("resultado")
  var chute = parseInt(document.getElementById("valor").value)
  var chances = 10
  var chancesNove = 9
  
  if (chute == numeroSecreto) {

    elementResult.innerHTML = "Você acerto bixo 😳"
    console.log("Acertou")
  
  } else if(chute > numeroSecreto) {
       elementResult.innerHTML = "Um pouco menos 👎"
    
  }
  if ( chute < numeroSecreto) {
    elementResult.innerHTML = " Um pouco mais 😏"
  }
  
  /*else{
      elementResult.innerHTML = "<p>Erroou 😪</p>" + " Só mais " + chances
    console.log("Errrrrrou")
  } if (chances == chute)  {
    elementResult.innerHTML = "<p>Erroou 😪</p>" + " Só mais " + chancesNove
  }*/

}

