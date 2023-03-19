/*
 реализовать проект, который считывает данные о пользователях по ссылке https://reqres.in/api/users?page=2
Данные необходимо отрисовать в карточках, используя гриды
*/
const cards_container = document.querySelector('.cards_container');
fetch('https://reqres.in/api/users?page=2')
    .then(function(res){
        return res.json()
    })
    .then(function(json){
        render(json.data)
    })
    function render(arr){
        arr.forEach(function({id, email, first_name, last_name, avatar}){
            const cardElem = document.createElement('div');
            const pIdElem = document.createElement('p');
            const aEmailElem = document.createElement('a')
            const pF_namelElem = document.createElement('p')
            const pL_namelElem = document.createElement('p')
            const imgAvalElem = document.createElement('img')

            pIdElem.innerText = id;
            aEmailElem.innerText = email;
            aEmailElem.href = `${email}`
            pF_namelElem.innerText = first_name;
            pL_namelElem.innerText = last_name;
            imgAvalElem.src = avatar;
            imgAvalElem.alt = first_name;

            
            cardElem.append(pIdElem, aEmailElem, pF_namelElem, pL_namelElem, imgAvalElem);
            cards_container.append(cardElem);
            //Стилизовать карточки
            //pIdElem.id = 'id'

            cardElem.classList.add('user')
        })
    }