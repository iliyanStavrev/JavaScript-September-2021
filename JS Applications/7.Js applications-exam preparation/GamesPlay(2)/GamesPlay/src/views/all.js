
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllGames} from '../api/data.js';

let templateAll = (data) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${data.map(template)}
</section>`;

let template = (item) => html`
<div class="allGames">
        <div class="allGames-info">
            <img src=${item.imageUrl}>
            <h6>Action</h6>
            <h2>${item.title}</h2>
            <a href=${`/details/${item._id}`} class="details-button">Details</a>
        </div>
    </div>`


 //<h3 class="no-articles">No articles yet</h3>
let container = document.querySelector('main');

export async function allGamesPage(){
   
    let data = await getAllGames();

    render (templateAll(data),container);

    if (data.length == 0 ) {
        render(html`<h1>All Games</h1><h3 class="no-articles">No articles yet</h3>`,document.getElementById('catalog-page'));
    }
    
}