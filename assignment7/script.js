/* Temperature converter*/
console.log("This is the temperature converter")

let celsiusT=30
let farenheit=((celsiusT*9/5)+32)
console.log(`${celsiusT}°C is ${farenheit}°F`)

farenheit=90
celsiusT=((farenheit-32)*5/9)
console.log(`${farenheit}°F is ${celsiusT.toFixed(2)}°C `)


/*BMI comparison*/
console.log("This is the BMI exercise")
//Data 1 calculations step 1
let lucasmass=78;
let johnmass=92;
let lucasheight=1.69;
let johnheight=1.95;

//Data 1 calculations step 2
let lucasbmi=lucasmass/lucasheight**2;
let johnbmi=johnmass/johnheight**2;

if(lucasbmi>johnbmi){
    console.log(`Lucas' BMI (${lucasbmi.toFixed(1)}) is higher than John's (${johnbmi.toFixed(1)})!`)
}
else{
    console.log(`John's BMI (${johnbmi.toFixed(1)}) is higher than Lucas' (${lucasbmi.toFixed(1)})!`)
}

/*Baseball teams*/
console.log("This is the Baseball team exercise using Data Bonus 2")

//Calculate average score of each team using Data
netsaver=(97+112+101)/3
knicksaver=(109+95+106)/3

minscore=100
team1=100
team2=100

if (netsaver>knicksaver&&netsaver>=minscore){
    console.log("The Nets win")
}
else if (knicksaver>netsaver&&knicksaver>=minscore) {
    console.log("The Knicks win")
}
else if (netsaver=knicksaver&&netsaver>=minscore){
    console.log("It is a draw")
}
else{
    console.log("No team wins")
}
