import { html, render } from '../../node_modules/lit-html/lit-html.js';


let templateAll = () => html`
   <section id="home">
    <article class="hero layout">
        <img src="./assets/team.png" class="left-col pad-med">
        <div class="pad-med tm-hero-col">
            <h2>Welcome to Team Manager!</h2>
            <p>Want to organize your peers? Create and manage a team for free.</p>
            <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
            <a href="/register" class="action cta">Sign Up Now</a>
            <a href="/teams" class="action cta">Browse Teams</a>
        </div>
    </article>
</section>`;


 
let container = document.querySelector('main');

export async function homePage() {

    render (templateAll(),container);
   
}