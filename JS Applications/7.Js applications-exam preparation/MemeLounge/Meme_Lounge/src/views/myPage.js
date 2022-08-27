
import { html,render } from "../../node_modules/lit-html/lit-html.js";
import page from '../../node_modules/page/page.mjs';
import { getAllMemes, getMyMemes } from "../api/data.js";

let templateAll = (data) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src=${sessionStorage.getItem('gender') == 'male'?"/images/male.png":"/images/female.png"}>
        <div class="user-content">
            <p>Username: ${sessionStorage.getItem('username')}</p>
            <p>Email: ${sessionStorage.getItem('email')}</p>
            <p>My memes count: ${data.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
     ${data.map(template)}
    </div>
</section>`; 

//

let template = (item) => html`
    <div class="user-meme">
            <p class="user-meme-title">${item.title}</p>
            <img class="userProfileImage" alt="meme-img" src=${item.imageUrl}>
            <a class="button" href=${`/details/${item._id}`}>Details</a>
        </div>`;

let container = document.querySelector('main');

export async function myPage(){
 
    let data = await getMyMemes(sessionStorage.getItem('userId'));

     render(templateAll(data),container);

    if (data.length == 0) {
        let list = document.querySelector('.user-meme-listings');
        render( html` <p class="no-memes">No memes in database.</p>`,list);
    }


}