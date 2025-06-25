let autenticado = sessionStorage.getItem("auth");              //se coge de el sessionStorage el valor de auth y se guarda en la variable "autenticado"
if(autenticado != "true"){             //si autenticado es diferente de TRUE 
   window.location = "../index.html"            //devuelve a la pestaña de inicio de sesion
}