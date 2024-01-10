/*
* Para manipular la información de un usuario, necesito crear un perfil mediante un objeto de JS
*/

const user = {
    username: 'danieldlcm86',
    age: 37,
    email: 'daniel@gmail.com',
    favFilms: ['Interstellar', 'Mindhunter', 'Se7en', 'Mean girls', 'Shrek']
}

//Crear una función que me permita ingresar el objeto del perfil en el nodo padre

const createUser = (user) => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    //document.getElementById("favFilms").textContent = user.favFilms;
    /*Mostrando elementos de lista en forma de lista.
    Para mostrar el array en forma de lista
    */
    const ul = document.getElementById("fav-Films");
    user.favFilms.forEach(film =>{
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);
    });
    //Modificando estilos de la ul para quitar viñetas
    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.color = "#D9870D"
}



//Invocando la función
createUser(user);

/*
* Events para actualizar el username mediante el input y el boton
*/

const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");
const inputEmail = document.getElementById("emailInput");

profileBtn.addEventListener("click", () =>{
    userName.textContent = inputName.value;
    userEmail.textContent = inputEmail.value;
})


// name    
// btn-main    
// username