let randomnumber = Math.trunc(Math.random()*100)+1 //You need this to be at the very beginning
let score=10;//original score
let highscore=0;//you can update this when you have other highscore
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

/*to change background color

document.querySelector('body').style.backgroundColor=''*/
