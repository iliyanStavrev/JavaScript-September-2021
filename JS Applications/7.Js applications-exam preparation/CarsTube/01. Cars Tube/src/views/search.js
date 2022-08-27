import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { getByYear } from '../api/data.js';



let search = () => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button @click=${searchByYear} class="button-list">Search</button>
    </div>
    <div id="results">

    </div>
  </section>`;
  
  let templateAll = (data) => html`
    <h2>Results:</h2>
    <div class="listings">

       ${data.map(template)}
        
        
    </div>
`;

let template = (car) => html`
<div class="listing">
            <div class="preview">
                <img src=${car.imageUrl}>
            </div>
            <h2>${car.brand} ${car.model}</h2>
            <div class="info">
                <div class="data-info">
                    <h3>Year: ${car.year}</h3>
                    <h3>Price: ${car.price} $</h3>
                </div>
                <div class="data-buttons">
                    <a href=${`/details/${car._id}`} class="button-carDetails">Details</a>
                </div>
            </div>
        </div>
`;

let container = document.querySelector('main');

export async function searchPage(){

    render (search(),container);

}

async function searchByYear(e){
    e.preventDefault();
    let query = document.getElementById('search-input').value;

    let data = await getByYear(query);
    render(templateAll(data),document.getElementById('results'));

   if (data.length == 0) {
       render(html`<p class="no-cars"> No results.</p>`,document.getElementById('results'))
   }

}
