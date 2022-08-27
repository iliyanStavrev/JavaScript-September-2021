import * as api from './api.js';

export let register = api.register;
export let login = api.login;
export let logout = api.logout;


export async function getAllTeams(){
    return await api.get('/data/teams');
}
export async function getAllMembers(){
    return await api.get('/data/members?where=status%3D%22member%22');
}

export async function eraseCar(id){
    return await api.del('/data/cars/' + id);
}

export async function createTeam(data){
    return await api.post('/data/teams',data);
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