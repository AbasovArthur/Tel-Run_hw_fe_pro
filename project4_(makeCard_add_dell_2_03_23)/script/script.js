/*

Необходимо реализовать приложение, которое позволяет добавлять пользователей через форму. 

При двойном нажатии на карточку пользователя он должен удаляться. Реализуйте приложение с использованием массива с данными, как мы это делали на уроке. 

ссылка на макет https://www.figma.com/file/VfyknhBAq59Idv245Ovg7m/Untitled?t=i1Q6LMHt6YUSco0v-1
*/
const body = document.querySelector('body');
const form = document.querySelector('.add_user');

const userCard = document.createElement('div');
body.append(userCard);

userCard.classList.add('user_block')

let usersArray = JSON.parse(localStorage.getItem('user_block')) ?? [];


function renderUser({url, title }){
    
    const cardElem = document.createElement('div');
    const avatar = document.createElement('img');
    const pName = document.createElement('p');

    avatar.src = '/media/image1.png';//
    pName.innerText = `${title}`;
    //pName.innerText = Ольга Петрова ;

    cardElem.classList.add('user_elem')

    cardElem.innerText = '';
    cardElem.append(avatar, pName);
    userCard.append(cardElem);

}

function addUser(event){
    event.preventDefault();
    const {url, title } = event.target.elements;

    const newUser = {
        title: title.value,
        url: url.value,
    };

    usersArray.push(newUser);
    localStorage.setItem('user_block', JSON.stringify(usersArray));
    renderUser(newUser);
    event.target.reset();
}

userCard.addEventListener('dblclick', function(event){

    if (event.target.classList.contains('user_elem')){
        event.target.parentNode.removeChild(event.target);
    }
});


form.addEventListener('submit', addUser);
usersArray.forEach(renderUser);
