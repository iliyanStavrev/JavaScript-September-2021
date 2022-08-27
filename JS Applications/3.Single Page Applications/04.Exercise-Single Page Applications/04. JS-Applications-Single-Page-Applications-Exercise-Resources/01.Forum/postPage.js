 import{showHomePage}from './homePage.js';
 
 document.querySelector('nav a').addEventListener('click',showHome);
 

 
  export async function showComments(e){
      e.preventDefault();
    let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`);
     let data = await response.json();

          let element = e.target.parentElement.parentElement;
    let username = document.querySelector('.nick-name span').textContent;
    let time = document.querySelector('time').textContent;
    let posttext = element.querySelector('.hidden').textContent;

    let main = document.querySelector('main');

  let divAnswer = document.createElement('div');
        divAnswer.classList.add('answer-comment');
        divAnswer.innerHTML  =
     `<p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>`; 

            let divPost = document.createElement('div');
    divPost.classList.add('comment');
    divPost.innerHTML = 
   `<div class="header">
         <img src="./static/profile.png" alt="avatar">
         <p><span>${username}</span> posted on <time>${time}</time></p>
 
         <p class="post-content">${posttext}</p>
     </div>`;

     if (Object.values(data).length > 0) {


        Object.values(data).forEach(c =>{
             let divUserComment = document.createElement('div');
              divUserComment.classList.add('user-comment');
              divUserComment.innerHTML = 
              `<div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${c.username}</strong> commented on <time>${c.time}</time></p>
                <div class="post-content">
                    <p>${c.postText}</p>
                </div>
            </div>
        </div>`;
        divPost.appendChild(divUserComment);
        });
      
       // divPost.appendChild(divAnswer);
     
        main.innerHTML = '';
        main.appendChild(divPost);
        main.appendChild(divAnswer);
     }
     else{
         main.innerHTML = '';
       main.appendChild(divPost);
       main.appendChild(divAnswer);
     }
     document.querySelector('.answer form').addEventListener('submit',postComment);
   }
   async function postComment(e){
    e.preventDefault();
    
   let form = new FormData(e.target);
   let postText = form.get('postText')
   let username = form.get('username');
    
   let days = new Date().toISOString().slice(0, 10);
let times = new Date().toISOString().slice(11, 19);
let time = days + ' ' + times;


   let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`+ e.target.id,{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({postText,username,time})
   });
     e.target.reset();
   if (!response.ok) {
       let err = await response.json();
       alert(err.message);
   }
   
   

     putComment();
 }
   
 async function putComment(){
    let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`);
    let data = await response.json();
    let arrComments = Array.from(Object.values(data));
    let lastComment = arrComments[arrComments.length - 1];

    let divComment = document.querySelector('.comment');

    let divUserComment = document.createElement('div');
              divUserComment.classList.add('user-comment');
              divUserComment.innerHTML = 
              `<div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${lastComment.username}</strong> commented on <time>${lastComment.time}</time></p>
                <div class="post-content">
                    <p>${lastComment.postText}</p>
                </div>
            </div>
        </div>`;
    
        divComment.appendChild(divUserComment);

 }
 
   function showHome(e){
       e.preventDefault();
       showHomePage();
   }