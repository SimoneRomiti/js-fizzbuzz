// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// PULSANTE GENERA
document.getElementById("button").innerHTML = "GENERA";
var pulsante = document.getElementById("button");
var numero;

// PULSANTE RESET
document.getElementById("delete").innerHTML = "RESET";
var reset = document.getElementById("delete");

// FUNZIONE PULSANTE GENERA
pulsante.addEventListener("click",
function(){

  // CICLO FOR PER TROVARE MULTIPLI
  for(var i = 1; i <= 100; i++){
    numero = i;
    if(i % 3 == 0 && i % 5 == 0){
      numero = "FizzBuzz";
    } else if(i % 3 == 0){
      numero = "Fizz";
    } else if(i % 5 == 0){
      numero = "Buzz";
    }

    // SCRITTURA NUMERI IN <LI> E IF PER CAMBIO COLORE MULTIPLI
    if(numero == "Fizz"){
      document.getElementById("elenco").innerHTML += '<li class="flex orange">' + numero + '</li>';
    } else if(numero == "Buzz"){
      document.getElementById("elenco").innerHTML += '<li class="flex blue">' + numero + '</li>';
    } else if(numero == "FizzBuzz"){
      document.getElementById("elenco").innerHTML += '<li class="flex red">' + numero + '</li>';
    } else{
      document.getElementById("elenco").innerHTML += '<li class="flex">' + numero + '</li>';
    }

  }
  // FINE CICLO FOR

  // EFFETTO APPARIZIONE CON ANIMATION 1 SEC SU CSS
  document.getElementById("visible").className = "show";
  // SECONDO CLICK DISABILITATO E OPACITY 0.5 AL PULSANTE
  pulsante.disabled = true;
  pulsante.className = "my-btn-V2";

  // PULSANTE RESET DI NUOVO CLICCABILE CON RITARDO DI 1 SEC PER FAR FINIRE ANIMAZIONE APPARIZIONE
  setTimeout(function enable(){
    reset.disabled = false;
    reset.className = "my-btn";
  }, 1000);


}
);
// FINE FUNZIONE PULSANTE GENERA


// FUNZIONE PULSANTE RESET
reset.addEventListener("click",
function(){
  // EFFETTO SCOMPARSA CON ANIMATION 1 SEC SU CSS
  document.getElementById("visible").className = "hidden";

  // ELIMINAZIONE CONTENUTI DELLA LISTA E PULSANTE GENERA DI NUOVO CLICCABILE CON RITARDO DI 1 SEC PER FAR FINIRE ANIMAZIONE SCOMPARSA
  setTimeout(function cancella(){
    document.getElementById("elenco").innerHTML = "";

    pulsante.disabled = false;
    pulsante.className = "my-btn";
  }, 1000);

  reset.disabled = true;
  reset.className = "my-btn-V2";

}
);
// FINE FUNZIONE PULSANTE RESET
