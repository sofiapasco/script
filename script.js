// Arrays aren't (that) suited for grouping related data together since they
// are index-based and relies on the order of the values


const fluffles = {
	name:"Mr. Fluffles",		
	age: 3,					
	owner: "Bengt",			
	hobbies:"Annoy people",		
	species: "Cat",				
};

const captainCat = {
    name:"Captain Cat",		// index 0
	species: "Cat",				
	age:9,				
	owner:"Agda",				
	hobbies:"HIIT",				// index 4
};

//console.log(captainCat.hobbies); // kallar på objektet genom att skriva ut namnet på objektet och sedan det jag vill få ut. 

const visaDjuret = (djur) => { //en callback function som gör en till funktion för att göra 1 mening med 2 olika objekt.Denna funktionen är en global scope som gör att den här fubktionen kan vara överallt i koden.
    console.log( `Here is ${djur.name} is a ${djur.species} and the owner is ${djur.owner} and my hobby is ${djur.hobbies}`);
    // man gör en en mening som kan passa alla objekt som man lägger upp. Man behöver inte anpassa sig till nån.
}

visaDjuret(captainCat);
visaDjuret(fluffles);

// Metoder är funktioner!! Men dom är 
//funktioner som assioserad sig med ett visst objekt eller en data typ

