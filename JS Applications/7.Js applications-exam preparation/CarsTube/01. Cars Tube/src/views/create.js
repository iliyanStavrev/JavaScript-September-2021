import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';
import { createCar } from "../api/data.js";

let template = () => html`
<section id="create-listing">
    <div class="container">
        <form id="create-form" @submit=${onSubmit}>
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>`;


async function onSubmit(e) {
    e.preventDefault();
    let form = new FormData(e.target);
    let brand = form.get('brand');
    let model = form.get('model');
    let description = form.get('description');
    let year = form.get('year');
    let imageUrl = form.get('imageUrl');
    let price = form.get('price');

    year = Number(year);
    price = Number(price);


    if (brand == '' || model == '' || description == '' || imageUrl == '' 
    || year == '' ||  price == '' ) {
        return alert('All fields are required!');
    }
    if (price < 0 || year < 0) {
        return alert('Price and Year must be positive!');
    }

    let data = { brand, model, description, imageUrl, year, price };


    await createCar(data);
    page.redirect('/all');
}

let container = document.querySelector('main');

export async function createPage() {

    render(template(), container);
}