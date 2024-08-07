
/* const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
]
    */
const IMAGE_URL = "https://placehold.co/200";

const users = [
    {
        id: 1,
        userName: 'UserKarla',
        description: 'Estudiante de leyes',
        age: '20',
        favMusic: {
            bands: ['Queen', 'Metallica', 'Iron', 'KISS']
        }
    },
    {
        id: 2,
        userName: 'UserLuis',
        description: 'Estudiante medico',
        age: '27',
        favMusic: {
            bands: ['U2', 'Pink Floyd', 'Nirvana', 'Rolling Stones']
        }
    },
    {
        id: 3,
        userName: 'UserLucy',
        description: 'Estudiante Gastronomia',
        age: '25',
        favMusic: {
            bands: ['Acdc', 'RadioHead', 'Led Zeppelin', 'The Beatles']
        }
    }    
]

//Funcion para crear una tarjeta de usuario
function createUserCard(user) {
    const cardUserElement = document.createElement('div');
    card.classList.add('card');

//crea un elemento imagen
    const img = document.createElement('img');
    img.src = user.IMAGE_URL;
    img.alt = 'user profile photo';
    card.appendChild(img);


    const cardTitle = document.createElement('h3');
    cardTitle.textContent = userName;
    cardTitle.classList.add("card-title");
    card.appendChild(cardTitle);


//crea un elemento para la edad del usuario
    const Age = document.createElement('p');
    Age.textContent = 'Age: ${user.Age}';
    card.appendChild(Age);

//crear un elemento para el Id de usuario
    const id = document.createElement('p');
    id.textContent = 'id: ${user.id}';
    card.appendChild(id);

//crea un elemento para la descripcion del usuario
    const description = document.createElement('p');
    description.textContent = user.description;
    card.appendChild(description);


//crea una lista de bandas favoritas
    const bandsList = document.createElement('p');
    bandas.textContent = user.favMusic.bands;
    card.appendChild(bandsList);

    return card;


}


//funcion para renderizar las tarjetas
   function renderUserCards(user) {
    const cardsContainer = document.getElementById('container');
    container.innerHTML = ''; // Limpiar contenedor antes de agregar tarjetas
    users.forEach(user => {
        const userCard = createUserCard(user); //Se crean tarjetas
        container.appendChild(userCard);
   });



   

















}


const card = document.createElement('div');
    card.classList.add('card');