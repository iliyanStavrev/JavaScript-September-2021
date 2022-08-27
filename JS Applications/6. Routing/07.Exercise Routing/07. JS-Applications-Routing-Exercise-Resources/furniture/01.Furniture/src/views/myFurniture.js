import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getMyFurniture } from '../api/data.js';
import { setButtonsActive } from '../app.js';


let template = (item) => html`
 <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src=${item.img} />
                            <p>Description here</p>
                            <footer>
                                <p>Price: <span>${item.price}</span></p>
                            </footer>
                            <div>
                                <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>`


let templateMyItems = (data) => html`
 <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
           ${data.map(template)}
        </div>`;

let container = document.querySelector('.container');

export async function myPage(){
  setButtonsActive(document.getElementById('profileLink'));
let data =  await getMyFurniture();
  render(templateMyItems(data),container);
  }