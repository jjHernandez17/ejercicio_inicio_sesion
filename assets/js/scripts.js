

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

function auth(){
    let email = document.getElementById('email'); 
    let password = document.getElementById('password'); 

    if(email && password){            
        
                let buscarUsuario = usuarios.find(u =>
                     u.correo === email.value && u.contraseña === password.value
                );
                if (buscarUsuario) {
                    console.log("inicio exitoso");
                    email.classList.add("is-valid");
                    password.classList.add("is-valid");
                    sessionStorage.setItem("auth", true);
                    window.location = "../other/home.html";
                }  
                else {
                    console.log("Correo o contraseña incorrectos");
                    email.classList.add("is-invalid");  
                    password.classList.add("is-invalid");
                };
        
        }   
    else{
        console.log("no hay alguna de las 2");
    }

}
    

function logout(){
    sessionStorage.setItem("auth", false)                   
    window.location = "../index.html"
}