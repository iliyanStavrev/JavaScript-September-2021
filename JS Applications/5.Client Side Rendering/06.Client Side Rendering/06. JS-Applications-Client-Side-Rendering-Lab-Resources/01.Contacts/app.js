   import {render} from 'https://unpkg.com/lit-html?module';
   import{contacts} from './contacts.js';
   import card from './card.js';

    let divContacts = document.getElementById('contacts');
    let result = contacts.map(card);
    render (result,divContacts);


