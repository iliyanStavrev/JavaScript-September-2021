import { showDetails } from "./details.js";


let main = undefined;
let section = undefined;

export function setUpEdit(mainTarget,sectionTarget){
 main = mainTarget;
 section = sectionTarget;
}
export async function showEdit(id){
  console.log(id);
 main.innerHTML = '';
 main.appendChild(section);

 let request = await fetch(`http://localhost:3030/data/movies/${id}`);
  let movie = await request.json();

 let titleInp = section.querySelector('input[name="title"]');
 let descriptionInp = section.querySelector('textarea[name="description"]');
 let imgInp = section.querySelector('input[name="imageUrl"]');

 titleInp.value = movie.title;
 descriptionInp.value = movie.description;
 imgInp.value = movie.img;
  console.log(movie.title);

 let formData = section.querySelector('form');
 formData.id = id;
 formData.addEventListener('submit',editMovie);

}
async function editMovie(e){

    e.preventDefault();
 let form = new FormData(e.target);
  let title = form.get('title');
  let description = form.get('description');
  let img = form.get('imageUrl');
    
     let response = await fetch('http://localhost:3030/data/movies/' + e.target.id,{
         method:'put',
         headers:{'Content-Type':'application/json',
                'X-Authorization':sessionStorage.getItem('token')},
         body:JSON.stringify({title,description,img})
     });
     if (!response.ok) {
         let err = response.json();
         alert(err.message);
     }
     showDetails(e.target.id);
  
}
 


