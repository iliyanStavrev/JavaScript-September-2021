
import * as api from './api.js';

export let register = api.register;
export let login = api.login;
export let logout = api.logout;

export async function getAllBooks(){
    return await api.get('/data/books?sortBy=_createdOn%20desc');
}

export async function getBook(id){
    return await api.get('/data/books/' + id);
}
export async function eraseBook(id){
    return await api.del('/data/books/' + id);
}

export async function createBook(data){
    return await api.post('/data/books',data);
}
export async function editBook(id,data){
    return await api.put('/data/books/' + id,data);
}

export async function getMyBooks(id){
    return await api.get(`/data/books?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);
}
export async function postLike(bookId){
    return await api.post(`/data/likes`,bookId);
}
export async function getLikes(bookId){
    return await api.get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
}
export async function getOwnLikes(userId,bookId){
    return await api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}