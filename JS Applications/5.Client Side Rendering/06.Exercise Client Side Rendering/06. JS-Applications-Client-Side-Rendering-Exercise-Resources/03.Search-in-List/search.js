
   import { html, render } from "../node_modules/lit-html/lit-html.js";
   import {towns} from "./towns.js";

function search() {

   let townsTemplate = (data) => html`
   <ul>
      ${data.map(t => html`<li>${t}</li>`)}
   </ul>`;

   let container = document.getElementById('towns');

   render(townsTemplate(towns),container);
};
search();

document.querySelector('button').addEventListener('click',searching);

function searching(e){
   e.preventDefault();
   let input = document.getElementById('searchText');
   let liArr = Array.from(document.querySelectorAll('#towns ul li'));
   let count = 0;
   for (const town of liArr) {
       town.removeAttribute('class');
      if (town.textContent.toLowerCase().startsWith(input.value.toLowerCase())) {
          count++;
         town.classList.add('active');
         
      }
   }
   document.getElementById('result').textContent = `${count} matches found`;
   input.value = '';
}
