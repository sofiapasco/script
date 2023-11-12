/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 * Googla för att hitta lämpliga metoder för att lösa uppgiften.
 *
 * Du ska alltså precis som i första dagens workshop ta bort kommentarerna
 * en efter en och testa att alla olika kombinationer av lösenord fungerar
 * och ger rätt resultat.
 */
/*

let password;

//password = "password"; // inte giltigt
//password = "pa$sword"; // giltigt
//password = "p@ssw%rd"; // giltigt
password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];


for (i=0; i<specialChars.length; i++);{


if(password.length >= 6 && password.includes(specialChars[i])){
    console.log("giltigt 6 bokstäver + 2 tecken"); 


} else if (password.length >=8 && password.includes(specialChars[i])){
    console.log('giltigt 8 bokstöver + 1 tecken');}
}
    else if(password.length >= 12 && password.includes('-') || password.lenght >= 16){
    console.log("giltigt med 12 tecken och bindesträck eller 16 tecken ");
  }else{ 
    console.log('vet jag ens vad jag gör????')
  }


/*
let points = 9;

if (points >0 ){
    console.log('positiv');
} else if (points <0 ) {
    console.log('negativ');
} else {
    console.log('noll')
}

let summa = 5;

for (i=1; i<5; i++);{
    console.log(klocka);
}
*/

 //Function Declaration


 //function greet() {
 	//alert("Hello from a function!");
 	//console.log("Hello from a function!");
// }

/*
 function greetUser(username, time = "day") {
	console.log(`Good ${time}, ${username}`);
}

greetUser("Johan", "morning");
greetUser("Pelle");
greetUser();


function namntyp(förnamn,dag){
console.log(`Good ${förnamn}, ${dag}`);
console.log(`Good ${förnamn} ${dag}`);
}

namntyp("Sofia", "idag");





/**
 * Function Expression // Bättre struktur
 */
// const greetUser = function(username, time = "day") {
// 	console.log(`Good ${time}, ${username}`);
// }
/*
const greetUser = function(username, time = "day") {
	console.log(`Good ${time}, ${username}`);
}

greetUser("Johan", "morning");
greetUser("Pelle");
greetUser();*/


/**
 * Lösenordskollen med funktioner
 *
 * Skriv om lösenordskollen till att testa samtliga lösenord i listan `passwords`.
 *
 * Ni ska även ha en funktion som räknar antalet specialtecken och returnerar
 * hur många som hittades.
 *
 * Varje lösenord ska console.log’as tillsammans med dess resultat.
 *
 * STEG 1
 * Testa samtliga lösenord i listan. Koden ska vara oberoende av hur många
 * lösenord som finns i listan.
 *
 * STEG 2
 * Skriv en funktion som räknar antalet unika specialtecken och returnerar
 * hur många specialtecken som hittades. Anropa den här funktionen för
 * varje lösenord.
 *
 * STEG 3 🌟
 * Refaktorera funktionen till att räkna antalet specialtecken (inte bara
 * antalet unika).
 *
 * KRAVSPEC FRÅN TIDIGARE:
 * - minst 6 tecken varav minst två (unika) specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 
*/
/*

const passwords = [
	"password",								// 🚨
	"p@*swd",								// 🔐
	"pa$sword",								// 🔐
	"p@ssw%rd",								// 🔐
	"pa$$wd",								// 🔐
	"secretpassword",						// 🚨
	"secret-password",						// 🔐
	"such-password-much-secure-very-long",	// 🔐
	"$$$",									// 🚨
];




for (let i= 0; i <= passwords.length; i++){
	const password = passwords [i];
	console.log(`Lösen är ${password}`);

}


const poäng= [12,34,56,7,79,56,89,89];

for(i = 0; i < poäng.length; i++){
	console.log(`Ditt poäng är`, poäng[i]);



if (poäng[i] ===34){
	console.log(`Grattis du vann`);
	break;
}

if (poäng[i]===7){
	console.log(`Du fick det lägsta poänget`);
	continue;
}
}
 */

const getRandomNumber = (max = 10) => {
return Math.ceil( Math.random() * max );
}

const tal = getRandomNumber ();
let guess = Number(prompt(`Gissa ett tal (skriv 0 för att avsluta)`));

while (true){	

	if( guess === 0){
		break;
	}else if (guess === tal){
		alert(`Grattis!`);
		break;
	} else if(guess > tal) {
		guess = Number(prompt(`Det är för högt,testa igen`));
	}else if(guess < tal){
		guess =Number(prompt(`Det är för lågt, testa igen`));
	}else{
		guess = Number(prompt(`Fel svar!Gissa igen`));
	}
}

