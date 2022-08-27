
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { eraseGame, getGame } from '../api/data.js';

let template = (item, isVisible) => html`
<section id="game-details">
   <h1>Game Details</h1>
   <div class="info-section">

      <div class="game-header">
         <img class="game-img" src=${item.imageUrl} />
         <h1>${item.title}</h1>
         <span class="levels">MaxLevel: ${item.maxLevel}</span>
         <p class="type">${item.category}</p>
      </div>

      <p class="text">
         ${item.summary}
      </p>
      ${isVisible == true ? html`
      <div class="buttons">
         <a href=${`/edit/${item._id}`} class="button">Edit</a>
         <a href="" @click=${deleteGame} id=${item._id} class="button">Delete</a>
      </div>
   </div>` : ''}

</section>`;

let container = document.querySelector('main');

export async function detailsPage(ctx) {
   let item = await getGame(ctx.params.id);
   let ownerId = item._ownerId;
   let userId = sessionStorage.getItem('userId');

   let isVisible = false;

   if (ownerId == userId) {
      isVisible = true;
   }

   render(template(item, isVisible), container);
}
 async function deleteGame(e){
    e.preventDefault();
    await eraseGame(e.target.id);
    page.redirect('/');
 }