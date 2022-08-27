import { html,render } from "../node_modules/lit-html/lit-html.js";
import {cats} from './catSeeder.js';

let catTemplate = (data) => html`
<ul @click=${showInfo}>
    ${data.map(c => 
        html`
        <li>
                <img src="./images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id="c.id">
                        <h4>Status Code: ${c.statusCode}</h4>
                        <p>${c.statusMessage}</p>
                    </div>
                </div>
            </li>`
    )}
</ul>`;

let allCats = document.getElementById('allCats');

render(catTemplate(cats),allCats);

function showInfo(e){
    e.preventDefault();
    if (e.target.tagName == 'BUTTON') {
        
       let element = e.target.parentElement.querySelector('.status');
       let button = e.target.parentElement.querySelector('.showBtn');
       
       element.style.display = element.style.display == 'none'? 'block' : 'none';

       button.textContent =  button.textContent === 'Show status code'
                                                      ?'Hide status code'
                                                      :'Show status code'
    }
    
}
