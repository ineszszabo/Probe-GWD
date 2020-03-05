//Einsendeaufgabe-mmde05d, Szabo Inesz

//Datum-Ausgabe
var datum = new Date();
var tag = datum.getDate();
var monat = datum.getMonth() +1;
var jahr = datum.getFullYear();

function ausgabe(tagen) {	
	return tagen;
}
var tag1 = ausgabe(tag);
var monat1 = ausgabe(monat);
var jahr1 = ausgabe(jahr);
document.getElementById("datum").innerHTML = "Heute ist " + tag1 + ". " + monat1 + ". " + jahr1;

// Bilder austauschen
function austauschen(id, quelle) {
    document.getElementById(id).src = quelle;
  }
  
function pruefen(){
   var nachname = document.getElementById("nachname");
   var mail = document.getElementById("email");
   if (nachname.value == "") {
   alert ("Bitte geben Sie Ihren Nachnamen an");
   nachname.focus();
   return false;
   }
   if (mail.value == "") {
   alert ("Bitte geben Sie Ihren E-Mail an");
   mail.focus;
   return false;
   }
  }