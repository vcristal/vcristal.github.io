/*Tip calculator*/
console.log("This is the Tip calculator")
const bills=[275,28,430]
bills[0]>300 ? console.log(`The bill was ${bills[0]}, the tip was ${bills[0]*0.20}, and the total value is ${bills[0]+bills[0]*0.20}`):console.log(`The bill was ${bills[0]}, the tip was ${bills[0]*0.15}, and the total value is ${bills[0]+bills[0]*0.15}`)

bills[1]>300 ? console.log(`The bill was ${bills[1]}, the tip was ${bills[1]*0.20}, and the total value is ${bills[1]+bills[1]*0.20}`):console.log(`The bill was ${bills[1]}, the tip was ${bills[1]*0.15}, and the total value is ${bills[1]+bills[1]*0.15}`)

bills[2]>300 ? console.log(`The bill was ${bills[2]}, the tip was ${bills[2]*0.20}, and the total value is ${bills[2]+bills[2]*0.20}`):console.log(`The bill was ${bills[2]}, the tip was ${bills[2]*0.15}, and the total value is ${bills[2]+bills[2]*0.15}`)


/*Celsius to farenheit function*/

const celciusT=30
const farenheitT=90

const celciustofarenheit=function(T){
    return (T*9/5)+32
}
console.log(celciustofarenheit(30))

//farenheittocelsius

/*Baseball teams*/
console.log("This is the Baseball team exercise")

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

/*Improved tip calculator*/
console.log("This is the improved tip calculator")
function Calctip(){

}

