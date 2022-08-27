import { html,render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';
import { getMeme,editMeme } from "../api/data.js";
import { notify } from "./notify.js";

let template = (item) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id=${item._id}>
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" value=${item.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description">
                   ${item.description}
                </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value=${item.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;

let container = document.querySelector('main');

export async function editPage(ctx){
   let item = await getMeme(ctx.params.id);
    render(template(item),container)
}
async function onSubmit(e){
    e.preventDefault();

    let form = new FormData(e.target);
    let title = form.get('title');
    let description = form.get('description');
    let imageUrl = form.get('imageUrl');

    if (title == '' || description == '' || imageUrl == '') {
        return notify('All fields are required!');
    }
    let data = { title, description, imageUrl };

    let id = e.target.id;
  


    await editMeme(id,data);
    page.redirect('/details/' + id);
}