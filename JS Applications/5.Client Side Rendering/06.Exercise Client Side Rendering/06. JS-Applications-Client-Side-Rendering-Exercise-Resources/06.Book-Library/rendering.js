import { html, render } from "../node_modules/lit-html/lit-html.js";
import { deleting, editBook } from "./app.js";

export function getHomePage() {
    let body = document.querySelector('body');

    let tableAndForm = () => html`
<button @click=${loadBooks} id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    </tbody>

</table>
<form id="add-form" >
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>
<form id="edit-form" style="display:none">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>
`;

    render(tableAndForm(), body);

}
export async function loadBooks() {

    let response = await fetch('http://localhost:3030/jsonstore/collections/books');
    if (!response.ok) {
        let err = await response.json();
        return alert(err.message);
    }
    let data = await response.json();

    let tbody = document.querySelector('tbody');

    let book = (info) => html`
    <tr id=${info._id}>
        <td>${info.title}</td>
        <td>${info.author}</td>
        <td>
            <button @click=${editBook}>Edit</button>
            <button @click=${deleting}>Delete</button>
        </td>
    </tr>`;

    let books = Object.values(data);

    render(books.map(book), tbody);

    //tbody.style.display = tbody.style.display == 'table-row-group'?'none':'table-row-group';
}



