import { html,render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';
import { editGame, getGame } from "../api/data.js";

let template = (item) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id=${item._id}>
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value=${item.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value=${item.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value=${item.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value=${item.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary">${item.summary}</textarea>
            <input class="btn submit" type="submit" value="Edit Game">
        </div>
    </form>
</section>`;

let container = document.querySelector('main');

export async function editPage(ctx){
   let item = await getGame(ctx.params.id);
    render(template(item),container)
}
async function onSubmit(e){
    e.preventDefault();

    let form = new FormData(e.target);
    let title = form.get('title');
    let category = form.get('category');
    let maxLevel = form.get('maxLevel');
    let imageUrl = form.get('imageUrl');
    let summary = form.get('summary');

    if (title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary == '') {
        return alert('All fields are required!');
    }
    let data = { title, category,maxLevel,imageUrl,summary };

    let id = e.target.id;
    
    await editGame(id, data);
    page.redirect('/details/' + id);
}