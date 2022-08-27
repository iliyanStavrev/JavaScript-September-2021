import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';
import { editCar, getCar } from "../api/data.js";

let template = (car) => html`
<section id="edit-listing">
    <div class="container">

        <form id=${car._id} @submit=${onSubmit}>
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" value=${car.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" value=${car.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" value=${car.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" value=${car.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" value=${car.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" value=${car.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;

let container = document.querySelector('main');

export async function editPage(ctx) {
  
    let car = await getCar(ctx.params.id);
    render(template(car), container)
}
async function onSubmit(e) {
    e.preventDefault();

    let form = new FormData(e.target);
    let brand = form.get('brand');
    let model = form.get('model');
    let description = form.get('description');
    let imageUrl = form.get('imageUrl');
    let year = form.get('year');
    let price = form.get('price');

    year = Number(year);
    price = Number(price);

    if (brand == '' || model == '' || description == '' || imageUrl == '' || year == '' || price == '') {
        return alert('All fields are required!');
    }
    if (price < 0 || year < 0) {
        return alert('Price and Year must be positive!');
    }
    
    let data = { brand, model, description, year, imageUrl,price };

    let id = e.target.id;

    await editCar(id, data);
    page.redirect('/details/' + id);
}