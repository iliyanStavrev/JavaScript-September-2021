import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/data.js';
import { setButtonsActive } from '../app.js';



export async function dashboardPage() {
  setButtonsActive(document.getElementById('catalogLink'));
  let container = document.querySelector('.container');
  let dashboardTempl = (data) => html`

        <div class="row space-top">
          <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
          </div>
        </div>
        <div class="row space-top">
          ${data.map(itemTemplate)}
        </div>
    `

  let itemTemplate = (item) => html`

  <div class="col-md-4">
    <div class="card text-white bg-primary">
      <div class="card-body">
        <img src="${item.img}" />
        <p>Description here</p>
        <footer>
          <p>Price: <span>${item.price}</span></p>
        </footer>
        <div>
          <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
        </div>
      </div>
    </div>
  </div>`;

  let data = await api.getFurniture();
  let result = dashboardTempl(data);
  render(result, container);
}