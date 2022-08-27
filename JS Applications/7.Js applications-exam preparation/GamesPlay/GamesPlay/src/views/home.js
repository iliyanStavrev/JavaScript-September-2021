import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllHomeGames } from '../api/data.js';

let templateAll = (data) => html`
<section id="welcome-world">

    <div class="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero">

    <div id="home-page">
        <h1>Latest Games</h1>

       ${data.map(template)}
    
    </div>
</section>`;

let template = (item) => html`
    <div class="game">
            <div class="image-wrap">
                <img src=${item.imageUrl}>
            </div>
            <h3>${item.title}</h3>
            <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div class="data-buttons">
                <a href=${`/details/${item._id}`} class="btn details-btn">Details</a>
            </div>
        </div>`;


 
let container = document.querySelector('main');

export async function homePage() {

    let data = await getAllHomeGames();

    render (templateAll(data),container);

    if (data.length == 0) {
        let divContainer = document.querySelector('#home-page');
        render(html`<p class="no-articles">No games yet</p>`,divContainer);
    }
   
}