
import * as api from './api.js';

export let register = api.register;
export let login = api.login;
export let logout = api.logout;

export async function getAllHomeGames(){
    return await api.get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}
export async function getAllGames(){
    return await api.get('/data/games?sortBy=_createdOn%20desc');
}
export async function getGame(id){
    return await api.get('/data/games/' + id);
}
export async function eraseGame(id){
    return await api.del('/data/games/' + id);
}

export async function createGame(data){
    return await api.post('/data/games',data);
}
export async function editGame(id,data){
    return await api.put('/data/games/' + id,data);
}