// import React, { useState, useEffect } from 'react'
// http.get(url);
// http.post(url, obj);
// method: 'POST',
// headers: { 'Content-Type': 'application/json' },
// body: JSON.stringify()
const http = {
    get: (url) => {
        return fetch(url).then((res) => res.json());
    },
    post:(url, obj)=>{
        return fetch(url,{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        }).then((res) => res.json());
    },
    delete:(url, obj)=>{
        return fetch(url,{
            method:'DELETE' 
        }).then((res) => res.json())
    }
}
// const getUser = (url) => {
//     return http.get('http://localhost:3000/user/' + url);
// };
// const getUser = () => {
//     return fetch('http://localhost:3000/user/')
//         .then((res) => res.json());

// }
// const updateUser = (url, obj) => {
//     return http.put('http://localhost:3000/user/' + url , obj);
// };

// const saveUser = (url, Obj) => {
//     return http.post('http://localhost:3000/user/' + url , obj);
    
// };
// const deleteUser = (url) => {
//     return  this.delete('https://jsonplaceholder.typicode.com/' + url)  
// };

const getUserById = (id = 18) => {
    return http.get('http://localhost:3000/user/' + id);
}

/*
type = preformance || activity || average-sessions
*/
const getUserByIdAndType = (id = 18,type) => {
    return fetch('http://localhost:3000/user/' + id +'/'+ type)
        .then((res) => res.json());

}
export const apiServices = {
    // updateUser,
    // saveUser,
    // deleteUser,
    getUserById,
    getUserByIdAndType, 
}

