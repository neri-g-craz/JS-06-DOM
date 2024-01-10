/*
Manipulación del DOM.
- Leer y traer nodos del arbol del DOM.
    document.getElementById (trae elementos por Id)
    document.getElementClassName (trae elementos por Class)
    document.getElementTagName (trae elementos por Etiquetas)
*/

//getElementById
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText); //Traer un string (texto que vive en mi id)

//getElementsByClassName
const titulos = document.getElementsByClassName ("title");
console.log(titulos);
console.log(titulos.length); //Devuelve la longitud de elementos de la clase.
console.log(typeof titulos); //Muestra que es un objeto porque es una coleccion de arrays

//getElementByTagName
const tituloHTres = document.getElementsByTagName("h3");
console.log(tituloHTres);
console.log(tituloHTres[0].innerText);

/* Métodos ára llamr elementos mediante selectores de CSS
Se usa ára procesos más específicos y lasintaxis querySelector
    -document.querSelector("selector"); //#, ., <>
    -document.querSelectorAll(). Selecciona los elementos que se especifiquen.
Siempre van a traer el primer elemento con el selector indicado
*/
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title");
console.log(queryClass);
//querySelectorAll
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS

titulo.style.textAlign = "center";
titulo.style.color = "#5058F2";

//Manipular el texto de un elemento
const tituloDos = document.querySelector("#title2");
tituloDos.innerText = "Sesión de Maniúlación del DOM - CH35";
tituloDos.style.color = "#F23030";

/*
Métodos para crear y agregar elementos en el DOM. Este proceso se divide en dos: "crear el nodo y agregar el nodo".
    -Crear nodos
        *document.createElement("element") --> Crea elementos a partir de etiquetas.
        document.createTextNode("text") --> Crea texto dentro de las etiquetas.
*/
const nodoUno = document.createElement("h4");
const imgNodo = document.createElement("img");

/*
    -Agregar nodos, mandamos a llamar el elemento padre y le pasamos la propiedad con la constante que guarda el nodo creado
        * parentElement.appendChild(const);
        * parentElement.append(const);
        * parentElement.insertBefore(const);
        * parentElement.insertAdjacentElement(const);
    Utilizaremos mayormente appendChild
*/

//Obtengo el elemento padre por tag, class o id
const parentElement = document.getElementById("dif");
//Agregar texto al nodo1
const textNodoUno = document.createTextNode("Imagen agregada desde el DOM");
//Inserto el texto en el nodo1
nodoUno.appendChild(textNodoUno);
//Insertar nodos en el elemento padre
parentElement.appendChild(nodoUno);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "#A62F03";

// Agregando imagen
/* Inserto el imgNodo en el elemento padre para definirlo posteriormente
*/
parentElement.appendChild(imgNodo);
//Accedo a las propiedades de la imagen
imgNodo.src= "./src/assets/abigeato.jpg";
imgNodo.alt = "Gato - Imagen";
imgNodo.width = "190";

/* 0tra forma de leer y modificar nodos
    document.outerHTML (leer)
    node.inner
*/

const elementOuter = tituloDos.outerHTML;
console.log(elementOuter);
tituloDos.innerHTML = "Manipulación del DOM - CH35";

