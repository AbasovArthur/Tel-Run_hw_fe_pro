/*
реализовать приложение, которое загружает посты с API, добавляет их в массив и отображает в интерфейсе. 

Ссылка на API https://jsonplaceholder.typicode.com/todos
*/
const cards_container = document.querySelector('.cards_container');
let posts = [];
async function loadPost(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await resp.json();
    const arr = data.map(function({userId, id, title, completed}){
        return {userId, id, title, completed}
    }) ;
    arr.forEach(function({userId, id, title, completed}){
        const cardElem = document.createElement('div');
        const pUserIdElem = document.createElement('p');
        const pIdElem = document.createElement('p');
        const pTitleElem = document.createElement('p');
        const pCompledElem = document.createElement('p');

        pUserIdElem.innerText = userId;
        pIdElem.innerText = id;
        pTitleElem.innerText = title;
        pCompledElem.innerText = completed;

        cardElem.classList.add('post');

        cardElem.append(pUserIdElem, pIdElem, pTitleElem, pCompledElem );
        cards_container.append(cardElem);
    })
}

loadPost();


    