import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { eraseCar, getCar } from '../api/data.js';

let template = (car, isVisible) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${car.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>

        <div class="listings-buttons">
            ${isVisible == true ? html`
             <a href=${`/edit/${car._id}`} class="button-list">Edit</a>
            <a @click=${deleteCar} id=${car._id} href="" class="button-list">Delete</a>` : ''}
           
        </div>
    </div>
</section>`;

let container = document.querySelector('main');

export async function detailsPage(ctx) {
    let item = await getCar(ctx.params.id);
    let ownerId = item._ownerId;
    let userId = sessionStorage.getItem('userId');

    let isVisible = false;

    if (ownerId == userId) {
        isVisible = true;
    }

    render(template(item, isVisible), container);
}
async function deleteCar(e) {
    e.preventDefault();
    await eraseCar(e.target.id);
    page.redirect('/all');
}