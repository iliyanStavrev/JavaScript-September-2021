
 import { html, render } from '../../node_modules/lit-html/lit-html.js';
 import page from '../../node_modules/page/page.mjs';
import { getAllBooks } from '../api/data.js';

 let templateAll = (data) => html`
 <section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">
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

 //

 let container = document.querySelector('main');

export async function homePage(){

    let data = await getAllBooks();

    render(templateAll(data),container);

    if (data.length == 0) {
      render(html` <p class="no-books">No books in database!</p>`,document.querySelector('#dashboard-page ul'))
    }
    
}
