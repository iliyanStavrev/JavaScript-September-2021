import { showHome } from "./homePage.js";

let main = undefined;
let section = undefined;

export function setUpAddMovie(mainTarget,sectionTarget){
 main = mainTarget;
 section = sectionTarget;
}
export function showAddMovie(){
 main.innerHTML = '';
 main.appendChild(section);

 document.querySelector('#add-movie form').addEventListener('submit',createMovie);
}
 async function createMovie(e){
     e.preventDefault();
     let form = new FormData(e.target);
     let title = form.get('title');
     let description = form.get('description');
     let img = form.get('imageUrl');

     if (title == '' || description == '' || img == '') {
           return;
     }

     fetch('http://localhost:3030/data/movies',{
         method:'post',
         headers:{'Content-Type':'application/json',
                  'X-Authorization':sessionStorage.getItem('token')},
         body:JSON.stringify({title,description,img})
     });

    
     showHome();
 }