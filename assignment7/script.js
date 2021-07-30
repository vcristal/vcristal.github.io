/* Temperature converter*/

let celsiusT=30
let farenheit=((celsiusT*9.5)+32)
console.log(`${celsiusT}°C is ${farenheit}°F`)

farenheit=90
celsiusT=((farenheit-32)*5/9)
console.log(`${farenheit}°F is ${celsiusT}°C `)


/*BMI comparison*/

//Data 1 calculations step 1
let lucasmass=78;
let johnmass=92;
let lucasheight=1.69;
let johnheight=1.95;

//Data 1 calculations step 2
let lucasbmi=lucasmass/lucasheight**2;
let johnbmi=johnmass/johnheight**2;


//Data 1 calculations step 3
let lucasHigherBMI=lucasbmi>johnbmi;
console.log("It is",lucasHigherBMI,"that Lucas has a higher BMI because Lucas'BMI is",lucasbmi,"while John's BMI is",johnbmi);

//Data 2 calculations step 1
lucasmass=95;
johnmass=85;
lucasheight=1.88;
johnheight=1.76;

//Data 2 calculations step 2
lucasbmi=lucasmass/lucasheight**2;
johnbmi=johnmass/johnheight**2;

//Data 2 calculations step 3
lucasHigherBMI=lucasbmi>johnbmi;
console.log(`It is ${lucasHigherBMI} that Lucas has a higher BMI because Lucas'BMI is ${lucasbmi} while John's BMI is ${johnbmi}`);


/*Baseball teams*/

minscore=100
team1=100
team2=100

if (team1>team2&&team1>=minscore){
    console.log("Team1 wins")
}
else if (team2>team1&&team2>=minscore) {
    console.log("Team2 wins")   
}
else if (team1=team2&&team1>=minscore){
    console.log("It is a draw")    
}
else{
    console.log("No team wins")    
}
