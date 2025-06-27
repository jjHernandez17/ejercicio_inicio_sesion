

let usuarios = [
        {
    nombre: "Robinson",  
    apellido: "Cortes",  
    correo: "robinson@riwi.io",  
    contraseña: "password1"  
    },
    {
    nombre: "Antony",  
    apellido: "Martinez",  
    correo: "antorny@riwi.io",  
    contraseña: "password2" 
    },

     {
    nombre: "Juan jose",  
    apellido: "Hernandez",  
    correo: "juanjohervar1708@gmail.com",  
    contraseña: "juanjo123" 
    }
    
]

let productos = [

]



if (!localStorage.getItem("usuarios")) {                //busca si no existe algo llamado usuarios en el localstorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));             //guarda la variable "usuarios" en el localStorage
}

function auth() {
    let email = document.getElementById('email'); 
    let password = document.getElementById('password'); 

    if (email && password) {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];      //lee la lista usuarios desde el localStorage y la convierte de texto a un arreglo de objetos

        let buscarUsuario = usuarios.find(u =>                  //u es un parametro temporal que representa cada objeto dentro  del arreglo usuarios
            u.correo === email.value && u.contraseña === password.value                 //condicion de que si en el objeto u en la posicion contraseña y en la posicion correo son igual a lo que ingresó el usuario
        );

        if (buscarUsuario) {
            console.log("inicio exitoso");
            email.classList.add("is-valid");
            password.classList.add("is-valid");
            sessionStorage.setItem("auth", true);
            sessionStorage.setItem("nombreUsuario", buscarUsuario.nombre); // Guardamos el nombre en el sessionStorage con clave nombreUsuario
            sessionStorage.setItem("apellidoUsuario", buscarUsuario.apellido);
            window.location = "../other/home.html";
        } else {
            console.log("Correo o contraseña incorrectos");
            email.classList.add("is-invalid");  
            password.classList.add("is-invalid");
        }
    } else {
        console.log("no hay alguna de las 2");
    }
}
    

function logout(){
    sessionStorage.setItem("auth", false)                   
    window.location = "../index.html"
}

window.onload = function saludar() {
  let auth = sessionStorage.getItem("auth");
        let nombre = sessionStorage.getItem("nombreUsuario");
        let apellido = sessionStorage.getItem("apellidoUsuario")

        if (auth === "true" && nombre) {
            document.getElementById("welcome").textContent = "Bienvenido " + nombre +" " + apellido;
        } else {
            // Si no está autenticado, redirige al login
            window.location = "../index.html";
        }

};

function agregarProducto() {
    let nombreProductoAgregar = document.getElementById("nameProduct").value;
    let precioProductoAgregar = document.getElementById("priceProduct").value;
    let descripcionProductoAgregar = document.getElementById("descriptionProduct").value;
    productos.push({
        nombre : nombreProductoAgregar,
        precio:precioProductoAgregar,
        descripcion : descripcionProductoAgregar
        
    });

    document.getElementById("product").innerHTML = ``;
    

    productos.forEach((elmento,index) => {
        document.getElementById("product").innerHTML += `
            <tr>
                <th scope="row">${index}</th>
                <td>${elmento.nombre}</td>
                <td>${elmento.nombre}</td>
                <td>@mdo</td>
                <td>accion</td>
            </tr>`
    });
   





    
}


