   import { html,render } from "../node_modules/lit-html/lit-html.js";

   document.getElementById('btnLoadTowns').addEventListener('click',loadingTowns);

   let towns = (data) => html`
   <ul>
     ${data.map(t => html`<li>${t}</li>`)} 
   </ul>`;

   function loadingTowns(e){
       e.preventDefault();
      let input = document.getElementById('towns').value;
      let data = input.split(',').map(t => t.trim());

      render(towns(data),document.getElementById('root'));

   }
