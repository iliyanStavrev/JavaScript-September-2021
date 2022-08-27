import * as api from './api.js';


export let login = api.login;
export let register = api.register;
export let logout = api.logout;

export async function getAllMemes(){
    return await api.get('/data/memes?sortBy=_createdOn%20desc');
}

export async function createMeme(data){
    return await api.post('/data/memes',data);
}

export async function getMeme(id){
    return await api.get('/data/memes/' + id);
}
export async function deleteMeme(id){
    return await api.del('/data/memes/' + id);
}
export async function editMeme(id,data){
    return await api.put('/data/memes/' + id, data);
}

export async function getMyMemes(id){
    return await api.get(`/data/memes?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);
}