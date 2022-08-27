import { deleteFurniture, getFurnitureByID } from "../api/data.js";
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../../node_modules/page/page.mjs';

let template = (item,isOwner) =>
  html`
<div class="row space-top">
  <div class="col-md-12">
    <h1>Furniture Details</h1>
  </div>
</div>
<div class="row space-top">
  <div class="col-md-4">
    <div class="card text-white bg-primary">
      <div class="card-body">
        <img src="${'.' + item.img}" />
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <p>Make: <span>${item.make}</span></p>
    <p>Model: <span>${item.model}</span></p>
    <p>Year: <span>${item.year}</span></p>
    <p>Description: <span>${item.description}</span></p>
    <p>Price: <span>${item.price}</span></p>
    <p>Material: <span>${item.material}</span></p>
    ${isOwner ? html`
    <div>
      <a href=${`/edit/${item._id}`} class="btn btn-info">Edit</a>
      <a @click=${deleteItem} id=${item._id} href=javascript:void(0) class="btn btn-red">Delete</a>
    </div>` : '' }
  </div>
</div>`;

let container = document.querySelector('.container');

export async function detailsPage(ctx) {
  let id = ctx.params.id;
  let item = await getFurnitureByID(id);

  let userId = sessionStorage.getItem('userId');
  let isOwner = item._ownerId == userId;
  render(template(item,isOwner), container);
  
}
async function deleteItem(e){
   e.preventDefault();
   let confirmed = confirm('Are you sure you want to delete this item?');
   if (confirmed) {
        let id = e.target.id;
   await deleteFurniture(id);
   page.redirect('/');
   }

}
