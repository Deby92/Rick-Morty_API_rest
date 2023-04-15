const URL_BASE = 'https://rickandmortyapi.com/api';
const URL_CHARACTERS = URL_BASE + '/character';

function tabla(datos) {
    contenido.innerHTML = "";

    for (let temp of datos) {
        contenido.innerHTML += ` <tr>
        <th scope="row">${temp.name}</ th>
        <td><img width="100px" height="100px" src="${temp.image}"</td>
        <td>${temp.species}</td>
    </tr> `;
        if (temp.id == 10) {
            break
        }

    }
}

function capturaDato() {
    
}

$(document).ready(function () {
    contenido = document.getElementById('contenido');

    fetch(URL_CHARACTERS)
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            tabla(datos.results);
        });

});

