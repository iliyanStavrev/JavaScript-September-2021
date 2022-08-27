import { html, render } from "../node_modules/lit-html/lit-html.js";

async function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   if (!response.ok) {
      let err = response.json();
      return alert(err.message);
   }
   let data = await response.json();

   let rowTemplate = (info) => html`
      <tr>
         <td>${info.firstName} ${info.lastName}</td>
         <td>S${info.email}</td>
         <td>${info.course}</td>
      </tr>`;

   let list = Object.values(data);
   render(list.map(rowTemplate), document.querySelector('tbody'));

   function onClick() {
      let input = document.getElementById('searchField');
      let arrayTd = Array.from(document.querySelectorAll('td'));

      arrayTd.forEach(tr => tr.parentElement.removeAttribute('class'));

      for (const cell of arrayTd) {
         let row = cell.parentElement;

         if (cell.textContent.toLocaleLowerCase().includes(input.value.toLowerCase())) {

            row.classList.add('select');
         }
      }
      input.value = '';
   }
}
solve();