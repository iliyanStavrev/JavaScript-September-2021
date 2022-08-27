
import * as api from './api.js';

export let register = api.register;
export let login = api.login;
export let logout = api.logout;


export async function getAllCars(){
    return await api.get('/data/cars?sortBy=_createdOn%20desc');
}
export async function getCar(id){
    return await api.get('/data/cars/' + id);
}
export async function eraseCar(id){
    return await api.del('/data/cars/' + id);
}

export async function createCar(data){
    return await api.post('/data/cars',data);
}
export async function editCar(id,data){
    return await api.put('/data/cars/' + id,data);
}
export async function getMyCars(userId){
    return await api.get(`/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}
export async function getByYear(query){
    return await api.get(`/data/cars?where=year%3D${query}`);
}