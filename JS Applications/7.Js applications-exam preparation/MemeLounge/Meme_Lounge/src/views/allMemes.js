import { html,render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';
import { getAllMemes } from "../api/data.js";

let templateAll = (data) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
       ${data.map(template)}
       
    </div>
</section>`; 

// <p class="no-memes">No memes in database.</p>

let template = (item) => html`
   <div class="meme">
            <div class="card">
                <div class="info">
                    <p class="meme-title">${item.title}</p>
                    <img class="meme-image" alt="meme-img" src=${item.imageUrl}>
                </div>
                <div id="data-buttons">
                    <a class="button" href=${`/details/${item._id}`}>Details</a>
                </div>
            </div>
        </div>`;

let container = document.querySelector('main');

export async function allMemesPage(){

    let data = await getAllMemes();

    if (data.length == 0) {
        render( html` <p class="no-memes">No memes in database.</p>`,container);
    }
  else{

      render(templateAll(data),container);
  }

}