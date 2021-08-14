let randomnumber = Math.trunc(Math.random()*100)+1 //You need this to be at the very beginning
console.log(randomnumber)
let score=10;//original score
let highscore=0;//you can update this when you have other highscore
document.querySelector('.score').textContent=`💰Score:${score}`
document.querySelector('.highscore').textContent=`🥇Highscore:${highscore}`
//Previous scores. I could
//let usernameold=$.ajax({
//                   datatype:'text',
//                   type : 'GET',
//                   data : usernamep,
//                   url : '/GET',
//                   success: function (data) { console.log('Request Fulfilled') },
//                   error: function (e) { console.log('Request failed...') }
//                })
//https://towardsdatascience.com/talking-to-python-from-javascript-flask-and-the-fetch-api-e0ef3573c451 To find better ways to improve your code Put this code in the reset function:
fetch(`/GET`)
  .then(function (response) {
      return response.text();
  }).then(function (text) {
      let usernameold=text
      document.querySelector('.usernameold').textContent=`${usernameold}`
  });

  fetch(`/GET2`)
    .then(function (response) {
        return response.text();
    }).then(function (text) {
        let scoreold=text
        document.querySelector('.scoreold').textContent=`${scoreold}`
    });



//Check button
document.querySelector('.Check').addEventListener('click',function(){
   inputUser=Number(document.querySelector('.userInput').value)
   if(!inputUser){
    document.querySelector('.msg').textContent='No Input!!'
   }//This will give a message if the user did not submit a value
   if (randomnumber==inputUser){
      document.querySelector('.title').textContent='You got the right answer!!';
      document.querySelector(".think").src="/static/images/correct.gif";
      document.querySelector('.guessnum').textContent=`${randomnumber}`
      document.querySelector('.highscore').textContent=`🥇Highscore:${score}`
      document.body.className = "green";
      let username=prompt("YOU WON!! Please give us your username:")
      $.ajax({
         datatype:'text',
         type : 'POST',
         data : { score :`${score}`, username:`${username}`},
         url : '/thankyou',
         success: function (data) { console.log('Sent Successfully') },
         error: function (e) { console.log('Submission failed...') }
    })
   }
   else if (randomnumber !== inputUser && (score >=1)){
     score=score-1
     document.querySelector('.score').textContent=`💰Score:${score}`
     document.querySelector(".think").src="/static/images/wrong.gif";
     if (score===0) {
       document.querySelector('.title').textContent='Game Over!!';
       document.querySelector('.guessnum').textContent=`Answer:${randomnumber}`
       document.querySelector(".think").src="/static/images/go.gif";
       document.body.className = "red";
     }
     else if (randomnumber>inputUser) {document.querySelector('.msg').textContent='↟Try a greater number!!';}
     else if (randomnumber<inputUser) {document.querySelector('.msg').textContent='⇓Try a smaller number!!'}
   }

})
document.querySelector('.resetbtn').addEventListener('click',function(){
   randomnumber = Math.trunc(Math.random()*100)+1
   console.log(randomnumber)
   score = 10;
   document.querySelector('.title').textContent='Guess My Number!';
   document.querySelector('.guessnum').textContent=`?`;
   document.querySelector('.score').textContent=`💰Score:${score}`
   document.body.className = "default"
   document.querySelector(".think").src="/static/images/thinker.gif";
   document.querySelector('.guessnum').textContent=`?`
   //I included the fetch in the reset button to update the results
   fetch(`/GET`)
     .then(function (response) {
         return response.text();
     }).then(function (text) {
         let usernameold=text
         document.querySelector('.usernameold').textContent=`${usernameold}`
     });

     fetch(`/GET2`)
       .then(function (response) {
           return response.text();
       }).then(function (text) {
           let scoreold=text
           document.querySelector('.scoreold').textContent=`${scoreold}`
       });
})
