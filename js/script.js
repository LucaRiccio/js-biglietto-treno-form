
document.getElementById("genera-button").addEventListener("click", function(){
  document.getElementById("scompare").classList.remove("opacita-on");
  document.getElementById("scompare").classList.add("opacita-off");
  var nome = document.getElementById("nome-field").value;
  document.getElementById("nome-pass").innerHTML = nome;
  var chilometri = document.getElementById("chilometri-field").value;
  var eta = document.getElementById("eta").value;

  document.getElementById('numero-carrozza').innerHTML = Math.floor((Math.random() * 10));
  document.getElementById('numero-codice').innerHTML = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;

  var costo = 0.21 * chilometri;
  sconto = "Biglietto standard";

  if (eta == 1) {
    costo = costo * 0.8;
    sconto = "Sconto minorenne";
  }

  else if (eta == 2) {
    costo = costo * 0.6;
    sconto = "Sconto silver";

  }
  document.getElementById("totale").innerHTML = costo.toFixed(2) + " €";
  document.getElementById("offerta").innerHTML = sconto;
});

document.getElementById("annulla-button").addEventListener("click", function(){
  document.getElementById("scompare").classList.remove("opacita-off");
  document.getElementById("scompare").classList.add("opacita-on");
  document.getElementById("nome-field").innerHTML = " ";
  document.getElementById("chilometri-field").innerHTML = " ";
});
