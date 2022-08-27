import { showEdit } from "./edit.js";
import { showHome } from "./homePage.js";

  async function getMovieById(id){
      let response = await fetch('http://localhost:3030/data/movies/' + id);
      let data = await response.json();
      
      return data;
    }
    async function getLikesByMovieId(id){
       
        let response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
        let data = await response.json();
        console.log(data);
        return data;
    }
    async function getOwnLikesByMovieId(id){
        let userId = sessionStorage.getItem('userId');
        let response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
        let data = await response.json();

        return data;
    }

    function createMovieCard(movie,likes,ownLike){
        
        let userId = sessionStorage.getItem('userId');
      let controls = [];
      if (userId != null) {
          if (userId == movie._ownerId) {
              controls.push(`<a id="${movie._id}" class="btn btn-danger delete" href="#">Delete</a>`);
              controls.push(`<a id="${movie._id}" class="btn btn-warning edit" href="#">Edit</a>`);
            }
            else{
                controls.push(`<a id="${movie._id}" class="btn btn-primary like" href="#">Like</a>`);
            }
        }
        controls.push(`<span class="enrolled-span">Liked ${likes}</span>`);
        
        let element = document.createElement('div');
        element.className = 'container';
        element.innerHTML = 
        `<div class="row bg-light text-dark">
        <h1>Movie title: ${movie.title}</h1>
        
        <div class="col-md-8">
        <img class="img-thumbnail" src=${movie.img}
        alt="Movie">
        </div>
        <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
         <p>${movie.description}</p>
         ${controls.join('')}
         </div>
         </div>`;
      
         return element;
       
        }
 
let main = undefined;
let section = undefined;

export function setUpDetails(mainTarget,sectionTarget){
 main = mainTarget;
 section = sectionTarget;
}
export async function showDetails(id){
 section.innerHTML = '';   
 main.innerHTML = '';
 main.appendChild(section);

 let [movie,likes,ownLike] = await Promise.all([
     getMovieById(id),getLikesByMovieId(id),getOwnLikesByMovieId(id)
 ]);

 let card = createMovieCard(movie,likes,ownLike);
 section.appendChild(card);

 if (ownLike.length > 0) {
    document.querySelector('#movie-details .text-center .like').remove();
   }

 let selected =  document.querySelectorAll('#movie-details .text-center a');
 selected.forEach(e => e.addEventListener('click',delegation));

}
 

   function delegation(e){
      e.preventDefault(); 
     
      if (e.target.tagName == 'A') {
           if (e.target.classList.contains('delete')) {
              
                 deleteMovie(e.target.id);
                }
                else  if (e.target.classList.contains('edit')) {
                    showEdit(e.target.id);
                   
                }
                else  if (e.target.classList.contains('like')) {
                   likeMovie(e.target.id);
                }
      }
            
 }
   async function deleteMovie(id){
       let response = await fetch('http://localhost:3030/data/movies/' + id,{
           method:'delete',
           headers:{'Content-Type':'application/json',
                'X-Authorization':sessionStorage.getItem('token')}
       });
       if (!response.ok) {
           alert(response.json().message);
       }
       showHome();
   }
   async function likeMovie(id){
       
      let response = await fetch('http://localhost:3030/data/likes',{
           method:'post',
           headers:{'Content-Type':'application/json',
           'X-Authorization':sessionStorage.getItem('token')},
           body:JSON.stringify({movieId:id})
        });
       if (!response.ok) {
           let err = await response.json()
           alert(err.message);
       }
       document.querySelector('#movie-details .text-center .like').remove();
        showDetails(id);
   } 
