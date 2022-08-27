import { showComments} from "./postPage.js";

let homePage = document.querySelector('.new-topic-border');
 
 export async function getAllPost(){
    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    let data = await response.json();

    return data;
}
  async function renderingData(){
        let data = await getAllPost();
        if (Object.values(data).length === 0) {
             return;
        }
        let divParent = document.createElement('div');
        divParent.classList.add('topic-container');
        Object.values(data).forEach(p =>{
            let div = document.createElement('div');
           div.classList.add('topic-name-wrapper');
            div.innerHTML = 
            `<div class="topic-name">
                   <a  href="" class="normal">
                       <h2 id=${p._id}>${p.title}</h2>
                   </a>
                     <div class='hidden'>
                     ${p.postText}
                     </div>
                   <div class="columns">
                       <div>
                           <p>Date: <time>${p.time}</time></p>
                           <div class="nick-name">
                               <p>Username: <span>${p.username}</span></p>
                           </div>
                       </div>
                   </div>
               </div>`;
               divParent.appendChild(div);
        });
        return divParent;
  }
  export async function showHomePage(){
     
      let main = document.querySelector('.container main');
      let divParent = await renderingData();
      main.innerHTML = '';
      main.appendChild(homePage);
      main.appendChild(divParent);

      let titles = Array.from(document.querySelectorAll('.topic-name h2'));
    
      titles.forEach(c => c.addEventListener('click',showComments));
  } 
  