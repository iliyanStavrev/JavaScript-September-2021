import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';
import { createBook } from "../api/data.js";

let template = () => html`
<section id="create-page" class="create">
  <form id="create-form" @submit=${onSubmit}>
    <fieldset>
      <legend>Add new Book</legend>
      <p class="field">
        <label for="title">Title</label>
        <span class="input">
          <input type="text" name="title" id="title" placeholder="Title">
        </span>
      </p>
      <p class="field">
        <label for="description">Description</label>
        <span class="input">
          <textarea name="description" id="description" placeholder="Description"></textarea>
        </span>
      </p>
      <p class="field">
        <label for="image">Image</label>
        <span class="input">
          <input type="text" name="imageUrl" id="image" placeholder="Image">
        </span>
      </p>
      <p class="field">
        <label for="type">Type</label>
        <span class="input">
          <select id="type" name="type">
            <option value="Fiction">Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Mistery">Mistery</option>
            <option value="Classic">Clasic</option>
            <option value="Other">Other</option>
          </select>
        </span>
      </p>
      <input class="button submit" type="submit" value="Add Book">
    </fieldset>
  </form>
</section>`;


async function onSubmit(e) {
  e.preventDefault();
  let form = new FormData(e.target);
  let title = form.get('title');
  let description = form.get('description');
  let imageUrl = form.get('imageUrl');
  let type = form.get('type');
 

  if (title == '' || description == '' || type == '' || imageUrl == '') {
    return alert('All fields are required!');
  }

  let data = { title, description, imageUrl , type };


  await createBook(data);
  page.redirect('/');
}

let container = document.querySelector('main');

export async function createPage() {

  render(template(), container);
}