let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("htmlcss");
        habilidades[6].classList.add("javascript");
        habilidades[7].classList.add("proyect");
        habilidades[8].classList.add("drupal");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("proyect");
        habilidades[11].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function enviarMensaje() {
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var tema = document.getElementById('tema').value;
    var mensaje = document.getElementById('mensaje').value;

    // Puedes enviar los datos por correo electrónico usando servicios de terceros como Formspree
    // Por ejemplo:
    var url = "https://formspree.io/f/mkndekrz"; 
    var data = {
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        tema: tema,
        mensaje: mensaje
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        if (response.ok) {
            alert('Mensaje enviado correctamente. ¡Gracias por contactarme!');
            // Limpiar los campos del formulario
            document.getElementById('nombre').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('correo').value = '';
            document.getElementById('tema').value = '';
            document.getElementById('mensaje').value = '';
        } else {
            alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
        }
    })
    .catch(function(error) {
        console.log('Hubo un problema con la solicitud Fetch: ', error);
        alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    });
}

document.getElementById("descargarCV").addEventListener("click", function() {
    // Crear un enlace temporal
    var enlaceTemporal = document.createElement("a");
    enlaceTemporal.href = "pdf/cv.pdf"; // Ruta de archivo
    enlaceTemporal.download = "mi_curriculum.pdf"; // Nombre del archivo que se descargará
    document.body.appendChild(enlaceTemporal);

    // Simular el clic en el enlace temporal
    enlaceTemporal.click();

    // Eliminar el enlace temporal después de la descarga
    document.body.removeChild(enlaceTemporal);
});
