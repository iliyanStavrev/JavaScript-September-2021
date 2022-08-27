import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllCars } from '../api/data.js';

let templateAll = (data) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings" id="list-of-cars">

    ${data.map(template)}

    </div>
</section>
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
</div>`;

        
let container = document.querySelector('main');

export async function allCarsPage() {

    let data = await getAllCars();

    render(templateAll(data), container);

    if (data.length == 0) {
        render(html`<p class="no-cars">No cars in database.</p>`, document.getElementById('list-of-cars'));
    }

}