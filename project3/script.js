document.querySelector('.Check').addEventListener('click',function(){
   const inputUser=Number(document.querySelector('.userInput').value)
   if(!inputUser){
    document.querySelector('.msg').textContent='No Input!!'
   }//This will give a message if the user did not submit a value
})// You are listening to user input. You can define the function right away of outside
