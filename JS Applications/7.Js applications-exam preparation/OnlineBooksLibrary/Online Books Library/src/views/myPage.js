import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';
import {  getMyBooks } from '../api/data.js';

let templateAll = (data) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <ul class="my-books-list">
     ${data.map(template)}
    </ul>

</section>`;

 let template = (book) => html`
    <li class="otherBooks">
           <h3>${book.title}</h3>
           <p>Type: ${book.type}</p>
           <p class="img"><img src=${book.imageUrl}></p>
           <a class="button" href=${`/details/${book._id}`}>Details</a>
       </li>`;



let container = document.querySelector('main');

export async function myBooksPage(){

   let data = await getMyBooks(sessionStorage.getItem('userId'));

   render(templateAll(data),container);

   if (data.length == 0) {
     render(html` <p class="no-books">No books in database!</p>`,document.querySelector('.my-books-list'));
   }
   
}
