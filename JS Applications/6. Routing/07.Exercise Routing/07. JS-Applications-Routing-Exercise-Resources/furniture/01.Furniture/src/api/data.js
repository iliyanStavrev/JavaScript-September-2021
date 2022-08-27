import * as api from './api.js';



export let login = api.login;
export let register = api.register;
export let logout = api.logout;

export async function getFurniture(){
    return await api.get('/data/catalog');
}

export async function getFurnitureByID(id){
    return await api.get('/data/catalog/' + id);
}

export async function getMyFurniture(){
    let userId = sessionStorage.getItem('userId');
    return await api.get(`/data/catalog?where=_ownerId%3D%22${userId}%22`);

}

export async function createFurniture(data){
    return await api.post(`/data/catalog`,data);
}

export async function editFurniture(id,data){
        return await api.put(`/data/catalog/` + id, data);
    }

export async function deleteFurniture(id){
    return await api.del(`/data/catalog/` + id);
}








