import { showHomePage } from "./homePage.js";


showHomePage();

  document.querySelector('.public').addEventListener('click',makeNewPost);
  document.querySelector('.cancel').addEventListener('click',cancelInput);
 // document.querySelector('nav a').addEventListener('click',showHomePage());


  async function makeNewPost(e){
      e.preventDefault();
      
    let title = document.getElementById('topicName').value;
    let username = document.getElementById('username').value ;
    let postText = document.getElementById('postText').value ;

    if (title == '' || username== '' || postText== '') {
             return;
    }
  
let days = new Date().toISOString().slice(0, 10);
let times = new Date().toISOString().slice(11, 19);
let time = days + ' ' + times;

  let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({title,username,postText,time})
  });
  if (!response.ok) {
    let err = await response.json();
    alert(err.message);
 }   
 document.getElementById('topicName').value = '';
 username = document.getElementById('username').value = ''; 
 postText = document.getElementById('postText').value = '';
 showHomePage();

}

 function cancelInput(e){
     e.preventDefault();

     document.getElementById('topicName').value = '';
     document.getElementById('username').value = ''; 
    document.getElementById('postText').value = '';
 }


