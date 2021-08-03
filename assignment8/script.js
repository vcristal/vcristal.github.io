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
console.log(`${celciusT}°C is ${celciustofarenheit(celciusT)}°F`)

const farenheittocelsius=function(T){
    return (T-32)*5/9  
}
console.log(`${farenheitT}°F is ${farenheittocelsius(farenheitT).toFixed(0)}°C`)

/*Baseball teams*/
console.log("This is the Baseball team exercise")

//Create an arrow function 'calcAverage' to calculate the average of 3 scores
netsdata1=[44,23,71]
knicksdata1=[65,54,49]
netsdata2=[85,54,41]
knicksdata2=[23,34,27]

const calcAverage=(array)=>{
    let total=0
for (let i=0;i<array.length;i++){
    total +=array[i]; 
}
return total/array.length
}

//Use the function to calculate the averages
let avgNets1=calcAverage(netsdata1)
let avgNets2=calcAverage(netsdata2)
let avgKnicks1=calcAverage(knicksdata1)
let avgKnicks2=calcAverage(knicksdata2)

//Create checkwinner function
const checkWinner=(Knicks,Nets)=>{
if (Knicks>2*Nets){
    return `the Knicks win (${Knicks} vs ${Nets})`
}
else if (Nets>2*Knicks){
    return `the Nets win (${Nets} vs ${Knicks} )`
}
else{
    return `no team wins`
}
}

console.log(`For test data 1, ${checkWinner(avgKnicks1,avgNets1)}`)

console.log(`For test data 2, ${checkWinner(avgKnicks2,avgNets2)}`)



/*Improved tip calculator*/
console.log("This is the improved tip calculator")
function Calctip(){

}

