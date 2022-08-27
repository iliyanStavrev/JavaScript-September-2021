import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllMembers, getAllTeams } from '../api/data.js';
import { updateNav } from '../app.js';

let templateAll = (data) => html`

<section id="browse">

    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>

    <article class="layout narrow user">
        <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
    </article>

    ${data.map(template)}
</section>
`;

let template = (team) => html`
<article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details"></span>
            <div><a href=${`/details/${team._id}`} class="action">See details</a></div>
        </div>
    </article>`;

        
let container = document.querySelector('main');

export async function teamsPage() {

    let data = await getAllTeams();
    let members = await getAllMembers();
   
    render(templateAll(data), container);
    updateNav();


}