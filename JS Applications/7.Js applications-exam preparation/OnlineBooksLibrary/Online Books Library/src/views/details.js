import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import { eraseBook,getBook, getLikes, getOwnLikes, postLike } from '../api/data.js';

let template = (book, isVisible,seeLike,likes) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
        ${isVisible == true ? html`
            <a class="button" href=${`/edit/${book._id}`}>Edit</a>
            <a class="button" href="" id=${book._id} @click=${deleteBook}>Delete</a>` : ''}
           
            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            ${seeLike == true ? '' : html`
            <a class="button" id=${book._id} href="" @click=${likesInfo}>Like</a>`}
            

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

let container = document.querySelector('main');

export async function detailsPage(ctx) {
   let book = await getBook(ctx.params.id);
   let ownerId = book._ownerId;
   let userId = sessionStorage.getItem('userId');

   let isVisible = false;
   let seeLike = false;
   if (ownerId == userId) {
      isVisible = true;
   }
   if (ownerId == userId || userId == null) {
    
    seeLike = true;
 }
 let ownLikes = await getOwnLikes(userId,book._id);
 console.log(ownLikes);

 if (ownLikes >= 1) {
     seeLike == true;
 }

 let likes = await getLikes(book._id); 
   
   render(template(book, isVisible,seeLike,likes), container);
}
 async function deleteBook(e){
    e.preventDefault();
    await eraseBook(e.target.id);
    page.redirect('/');
 }

 async function likesInfo(e){
     e.preventDefault();
    let bookId = e.target.id;
    await postLike({bookId});
    page.redirect('/details/' + bookId);
 
 }
