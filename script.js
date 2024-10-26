let waitingForName = false;
let waitingForUser = false;
var arrayUsers = new Array(4);

// Funciones

function saludar(name) {
  listResponse.innerHTML = "Bienvenido " + name;

}

function showtime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  listResponse.innerHTML = "La hora actual es: " + time;
}

function seedate (){
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const datenow = day + "/" + month + "/" + year;
  listResponse.innerHTML = "La fecha actual es: " + datenow;
}


function registerUser(user) {
  let spaceFound = false;
  let isRegistered = arrayUsers.includes(user.toLowerCase());

  if (isRegistered) {
    listResponse.innerHTML = "El usuario ya se encuentra registrado";
    return;
  }

  for (let i = 0; i < arrayUsers.length; i++) {

    if (arrayUsers[i] === undefined) {
      arrayUsers[i] = user.toLowerCase();
      spaceFound = true;
      break;
    }

  }

  if (!spaceFound) {
    listResponse.innerHTML = "No hay espacio disponible";
  } else {
    listResponse.innerHTML = user + " fue registrado con exito";
    document.querySelector("#userInput").value = '';
  }

}

function viewUsers() {
  if (arrayUsers[0] == undefined) {
    listResponse.innerHTML = "Aún no tenemos usuarios registrados";
  } else {

    let list = "<h3><center>Nuestra Comunidad</h3><ul>";
    for (let i = 0; i < arrayUsers.length; i++) {
      if (arrayUsers[i] != undefined) {
        list += `<li>${arrayUsers[i]}</li>`;
      }
    }

    list += "</ol>";

    listResponse.innerHTML = list;
  }
}

function telljoke() {
  const jokes = [
    "Forrest Gump",
    "Los Pitufos",
    "Gladiador",
    "El padrino",
    "El Club de la Pelea"
  ];

  const chosenjoke = jokes[Math.floor(Math.random() * jokes.length)];

  listResponse.innerHTML = chosenjoke;
}

// Bucle para mostrar las respuestas  
var form = document.querySelector(".Assistant");
const listResponse = document.querySelector('.listResponse');


form.addEventListener("submit", function(event) {
  event.preventDefault();

  const functions = document.querySelector(".listResponse");

  var input = document.querySelector("#userInput").value;

  if (waitingForName) {
    saludar(input);
    waitingForName = false;
    document.querySelector("#userInput").value = '';
    return;
  }

  // Espera que pasen el usuario a registrar
  if (waitingForUser) {
    registerUser(input);
    waitingForUser = false;
    document.querySelector("#userInput").value = '';
    return;
  }

  switch (input) {
    case "1":
      listResponse.innerHTML = "¿Cuál es tu nombre?";
      waitingForName = true;
      document.querySelector("#userInput").value = '';
      break;
    case "2":
      showtime();
      document.querySelector("#userInput").value = '';
      break;
    
    case "3":
      seedate();
      document.querySelector("#userInput").value = '';
    break;

    case "4":
      var text = `
          Digite el nombre de usuario
      `;
      listResponse.innerHTML = text;
      waitingForUser = true;
      document.querySelector("#userInput").value = '';

      break;

    case "5":
      viewUsers();
      document.querySelector("#userInput").value = '';
      break;

    case "6":
      telljoke();
      document.querySelector("#userInput").value = '';
      break;
    default:
      alert("Elige una opción valida");
      document.querySelector("#userInput").value = '';
      break;
  }

});

//Funcionalidad Botón Empezar
var modal = document.querySelector(".modal")

const chatBtn = document.querySelector("#chat-btn");

chatBtn.addEventListener('click', function(){
  modal.style.display = 'flex';
});

//Funcionalidad Botón EXIT

const exitBtn = document.querySelector("#exit-btn");

exitBtn.addEventListener('click', function(){
  modal.style.display = 'none';
});






