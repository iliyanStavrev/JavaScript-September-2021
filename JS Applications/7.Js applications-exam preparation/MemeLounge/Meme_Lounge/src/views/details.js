
import { html,render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';
import { deleteMeme, getMeme } from "../api/data.js";

let template = (item,isVisible) =>html`
<section id="meme-details">
    <h1>Meme Title: ${item.title}
    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${item.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
               ${item.description}
            </p>
         ${isVisible == true ? html`
            <a class="button warning" href=${`/edit/${item._id}`}>Edit</a>
            <button @click=${deleteItem} id=${item._id} class="button danger">Delete</button>`
            : ''}
        </div>
    </div>
</section>`; 

let container = document.querySelector('main');

export async function detailsPage(ctx){
    let id = ctx.params.id;
    let meme = await getMeme(id);
    let ownerId = meme._ownerId;
    let userId = sessionStorage.getItem('userId');
    
    let isVisible = false;
    if (ownerId == userId) {
        isVisible = true;
    }

    render (template(meme,isVisible),container);
}
async function deleteItem(e){
 e.preventDefault();
 let confirmed = confirm('Are you sure you want to delete this Meme?');
 if (confirmed) {
      await deleteMeme(e.target.id);
   page.redirect('/all');
 }
}