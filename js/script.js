// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var pulsante = document.getElementById("button");
var numero;
pulsante.addEventListener("click",
function(){
  for(var i = 1; i <= 100; i++){
    numero = i;
    if(i % 3 == 0 && i % 5 == 0){
      numero = "FizzBuzz";
    } else if(i % 3 == 0){
      numero = "Fizz";
    } else if(i % 5 == 0){
      numero = "Buzz";
    }
    console.log(numero);
  }
}
);
