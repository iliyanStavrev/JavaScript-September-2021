
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { addComments, eraseGame, getComments, getGame } from '../api/data.js';

let template = (item, isVisible, data, onSubmit, userId) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${item.imageUrl} />
            <h1>${item.title}</h1>
            <span class="levels">MaxLevel: ${item.maxLevel}</span>
            <p class="type">${item.category}</p>
        </div>

        <p class="text">
            ${item.summary}
        </p>
        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                <!-- list all comments for current game (If any) -->
                ${data.length == 0 ? html`<p class="no-comment">No comments.</p>` : data.map(commentTemp)}
            </ul>

        </div>

        <div class="buttons">
            ${isVisible == true ? html`

            <a href=${`/edit/${item._id}`} class="button">Edit</a>
            <a href="" @click=${deleteGame} id=${item._id} class="button">Delete</a>

            ` : ''}
        </div>
        ${userId != null ? html`
        <article class="create-comment">
            <label>Add new comment:</label>
            <form class="form" @submit=${onSubmit}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article>` : ''}

    </div>
</section>`;

let commentTemp = (item) => html`
<li class="comment">
    <p>Content: ${item.comment}</p>
</li>`;

let container = document.querySelector('main');

export async function detailsPage(ctx) {
    let item = await getGame(ctx.params.id);
    let ownerId = item._ownerId;
    let userId = sessionStorage.getItem('userId');
    console.log(userId);

    let isVisible = false;

    if (ownerId == userId) {
        isVisible = true;
    }
    let data = await getComments(ctx.params.id);

    async function onSubmit(e) {
        e.preventDefault();

        let form = new FormData(e.target);
        let comment = form.get('comment');
        let gameId = ctx.params.id;
        let commentData = {
            gameId, comment
        }
        await addComments(commentData);
        e.target.reset();
        page.redirect('/details/' + gameId);

    }
    render(template(item, isVisible, data, onSubmit, userId), container);
}
async function deleteGame(e) {
    e.preventDefault();

    let confirmed = confirm('Are you sure you want to delete this game?');
    if (confirmed) {
        await eraseGame(e.target.id);
        page.redirect('/');
    }

}
