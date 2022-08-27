import { showDetails } from "./details.js";

    
   async function getMovies(){
        let response = await fetch('http://localhost:3030/data/movies');
        let data = await response.json();

        return data;
    }
   
    function addMoviePreview(movie){
        let element = document.createElement('div');
        element.className = 'card mb-4';   
        element.innerHTML  = 
    `<img class="card-img-top" src="${movie.img}"
             alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${movie.title}</h4>
        </div>
        <div class="card-footer">
                <button id="${movie._id}" type="button" class="btn btn-info movieDetails">Details</button>
        </div>`;

    return element;
    }
   
   let main = undefined;
   let section = undefined;
   let container = undefined;

export function setUpHome(mainTarget,sectionTarget){
    main = mainTarget;
    section = sectionTarget;
    container = section.querySelector('.card-deck.d-flex.justify-content-center');

    container.addEventListener('click',e => {
      if (e.target.classList.contains('movieDetails')) {
          showDetails(e.target.id);
      }
    });
}
export async function showHome(){
    container.innerHTML = 'Loading...';
    main.innerHTML = '';
    main.appendChild(section);
    
    let movies = await getMovies();
    let cards = movies.map(addMoviePreview);

    container.innerHTML = '';
    cards.forEach(m => container.appendChild(m));
}