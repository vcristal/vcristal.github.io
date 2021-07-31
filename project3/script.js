let randomnumber = Math.trunc(Math.random()*100)+1
console.log(randomnumber)
document.querySelector('.Check').addEventListener('click',function(){
   inputUser=Number(document.querySelector('.userInput').value)
   if(!inputUser){
    document.querySelector('.msg').textContent='No Input!!'
   }//This will give a message if the user did not submit a value
   let guess =1;
   if (randomnumber==inputUser){
       console.log('You got the right answer');
   }
   else if (randomnumber>inputUser){
       console.log ('Try a greater number');
       guess++;
   }
   else {
       console.log ('Try a smaller number')
   }
})// You are listening to user input. You can define the function right away of outside
