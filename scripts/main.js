//const miTitulo = document.querySelector('h1');
//miTitulo.textContent = '¡Hola mundo!';

/* document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}*/


//al hacer click en la imagen, comprueba que imagen y la cambia por la otra.
let miImage = document.querySelector('img');
miImage.onclick = function(){
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/firefox-icon.png'){
        miImage.setAttribute('src','images/chrome.jpg');
    }
    else{
        miImage.setAttribute('src','images/firefox-icon.png');
    }
    
}

// Mensaje de bienvenida
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    //se asegura que no deja el nombre en blanco para evitar que muestre Null
    if(!miNombre){
        estableceNombreUsuario();
    }else{
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML='Mozilla es genial, ' + miNombre;
    }
}

// Comprueba el contenido del LocalStorage
if (!localStorage.getItem('nombre')){
    estableceNombreUsuario();
}
else{
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent='Mozilla es genial, ' + nombreAlmacenado;
}

// Establece el evento onClick para el botón
miBoton.onclick=function(){
    estableceNombreUsuario();
}

