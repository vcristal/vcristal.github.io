document.querySelector('.Check').addEventListener('click',function(){
   const inputUser=Number(document.querySelector('.userInput').value)
   if(!inputUser){
    document.querySelector('.msg').textContent='No Input!!'
   }//This will give a message if the user did not submit a value
})// You are listening to user input. You can define the function right away of outside

let randomnumber = math.floor(Math.random()*100+1);
let guess =1;
document.getElementById,('Check').onclick=function() {
    let answer=document.getElementById('userInput').Value;
}
if (randomnumber==answer){
    console.log('You got the right answer');
}
else if (randomnumber>answer){
    console.log ('Try a smaller number');
    guess++;
}
else {
    console.log ('Try a greater number')
}

