
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { editFurniture, getFurnitureByID } from "../api/data.js";
import page from '../../../node_modules/page/page.mjs';


let template = (item) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Edit Furniture</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form id=${item._id} @submit=${editItem}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-make">Make</label>
          <input class="form-control" id="new-make" type="text" name="make" value=${item.make}>
        </div>
        <div class="form-group has-success">
          <label class="form-control-label" for="new-model">Model</label>
          <input class="form-control " id="new-model" type="text" name="model" value=${item.model}>
        </div>
        <div class="form-group has-danger">
          <label class="form-control-label" for="new-year">Year</label>
          <input class="form-control " id="new-year" type="number" name="year" value=${item.year}>
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-description">Description</label>
          <input class="form-control" id="new-description" type="text" name="description" value=${item.description}>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-price">Price</label>
          <input class="form-control" id="new-price" type="number" name="price" value=${item.price}>
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-image">Image</label>
          <input class="form-control" id="new-image" type="text" name="img" value=${item.img}>
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-material">Material (optional)</label>
          <input class="form-control" id="new-material" type="text" name="material" value=${item.material}>
        </div>
        <input type="submit" class="btn btn-info" value="Edit" />
      </div>
    </div>
  </form>`;

let container = document.querySelector('.container');


export async function editPage(ctx) {
     console.log(ctx.params.id);
  let data = await getFurnitureByID(ctx.params.id);
   render(template(data),container);

}

async function editItem(e){
  e.preventDefault();
  let form = new FormData(e.target);
  let make = form.get('make');
  let model = form.get('model');
  let year = form.get('year');
  let description = form.get('description');
  let price = form.get('price');
  let img = form.get('img');
  let material = form.get('material');

  
  if (make.length < 4) {
    document.getElementById('new-make').classList.add('is-invalid');
       return alert('Make is invalid!');
}
else{
 document.getElementById('new-make').classList.add('is-valid');
}
if (model.length < 4) {
 document.getElementById('new-model').classList.add('is-invalid');
 return alert('Model is invalid!');
}
else{
document.getElementById('new-model').classList.add('is-valid');
}
if (year >= 1950 && year <= 2050) {
 document.getElementById('new-year').classList.add('is-valid');
 
}
else{
document.getElementById('new-year').classList.add('is-invalid');
return alert('Year is invalid!');
}
if (description.length < 10) {
 document.getElementById('new-description').classList.add('is-invalid');
 return alert('Description is invalid!');
}
else{
document.getElementById('new-description').classList.add('is-valid');
}
if (price > 0) {
 document.getElementById('new-price').classList.add('is-valid');

}
else{
document.getElementById('new-price').classList.add('is-invalid');
return alert('Price is invalid!');
}
if (img == '') {
 document.getElementById('new-image').classList.add('is-invalid');
 return alert('Image is invalid!');
}
else{
document.getElementById('new-image').classList.add('is-valid');
}

  

  let data = {
    make,model,year,description,price,img,material,
  }

  let id = e.target.id;
   await editFurniture(id,data);
   
  page.redirect('/details/' + id);

}