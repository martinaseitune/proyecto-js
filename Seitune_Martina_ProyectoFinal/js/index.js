let cuotas;
let precioPersona = 0;
let total;

const multiplica = (a,b) => a*b;
const divide = (a,b) => a/b;
const suma = (a,b) => a+b;


//Cliente//

function Cliente (nombre, mail) {
    this.nombre = nombre;
    this.email = mail;
}


//Combo servicio//

function Datos(tipoEvento, cantidadPersonas, barraTragos, vajilla, mesaDulce){
    this.tipoEvento = tipoEvento;
    this.cantidadPersonas = parseInt(cantidadPersonas);
    this.barraTragos = barraTragos;
    this.vajilla = vajilla;
    this.mesaDulce = mesaDulce;
}


//Servicios extra//

class Servicio{
    constructor(nombre, precioExtra){
        this.nombre = nombre
        this.precioExtra = precioExtra;
    }
}

const serviciosContratados = [];


//Precios//

function eleccionEvento (){
    
    switch(tipoEvento){

        case "Social":
            if(cantidadPersonas <= 100){
                precioPersona = 4500;
            } else if (cantidadPersonas <= 500){
                precioPersona = 4000;
            } else {
                precioPersona = 3500;
            
            }
            break;

        case "Corporativo":
            if(cantidadPersonas <= 100){
                precioPersona = 5000;
            } else if (cantidadPersonas <= 500){
                precioPersona = 4500;
            } else {
                precioPersona = 4000;
            
            }
            break;
    }
}

function sumarExtras(){
    if (barraTragos == "Si"){
        serviciosContratados.push(new Servicio("Barra de Tragos", 4500));
    } 

    if (vajilla == "Si"){
        serviciosContratados.push(new Servicio("Vajilla de Color", 2500));
    }

    if (mesaDulce == "Si"){
        serviciosContratados.push(new Servicio("Mesa Dulce", 3000));
    }
}



//Obtener datos del form//

function obtenerDatos(){
    let tipoEvento = document.getElementById("selectEvento").value;
    let cantidadPersonas = document.getElementById("cantInvitados").value;
    let barraTragos = document.getElementById("selectTragos").value;
    let vajilla = document.getElementById("selectVajilla").value;
    let mesaDulce = document.getElementById("selectDulce").value;
    
    let datos = new Datos(tipoEvento, cantidadPersonas, barraTragos, vajilla, mesaDulce);
    return datos;
 }

 function obtenerCliente(){
     let nombreCliente = document.getElementById("nombreCliente").value;
     let mailCliente = document.getElementById("mailCliente").value;

     let cliente = new Cliente(nombreCliente, mailCliente);
     return cliente;
 }



//Valido datos//

function validarNombre(valor) {
    if(valor == null || valor.length == 0) {
      return false;
    } 
    return true;
}

function validarMail(valor) {
    if(valor == null || valor.length == 0 || valor == isNaN) {
      return false;
    } 
    return true;
}

function validarInvitados(valor) {
    if(valor == null || valor.length == 0) {
      return false;
    } 
    return true;
}


let botonCalcular = document.getElementById("btnCalcular");

let formulario = document.getElementById("formPresupuesto");

formulario.addEventListener("submit")

function submitForm(e){
    
    e.preventDefault();
   
    let datos = obtenerDatos();
    let cliente = obtenerCliente();
    
    const subtotal = serviciosContratados.reduce((acum,el) => acum + el.precioExtra, 0);

}



botonCalcular.onclick = () => {
    let nombreValido = validarNombre(document.getElementById("nombreCliente").value);
    let mailValido = validarMail(document.getElementById("mailCliente").value);
    let invitadosValido = validarInvitados(document.getElementById("cantInvitados").value);

    if (nombreValido && mailValido && invitadosValido){
        submitForm();
    } else {
        if(nombreValido == false){
            let nombreFalse = document.getElementById("validar-nombre");
            nombreFalse.innerHTML = "<p>Nombre inválido</p>"
          }
          if(mailValido == false){
            let mailFalse = document.getElementById("validar-mail");
            mailFalse.innerHTML = "<p>Mail inválido</p>"
          }
          if(invitadosValido == false){
            let invitadosFalse = document.getElementById("validar-invitados");
            invitadosFalse.innerHTML = "<p>Número inválido</p>"
          }
    }
}






//A resolver
const listado = () => {

    let listaServicios = document.getElementById("listaServicios");
        
        for (const servicio of serviciosContratados){
    
        let li = document.createElement("li");
    
        li.innerHTML = `${servicio.nombre} por un valor de $${servicio.precioExtra} por persona`
    
        listaServicios.append(li);
    }
    }



//for(let i=0;i<2;i++){

    do{
        cuotas = parseInt(prompt("Ingrese en cuantas cuotas quiere abonar (1 a 6)"));
    } while (isNaN(cuotas));

//if(cuotas<=6){

total = divide(suma(multiplica(cantidadPersonas, precioPersona), subtotal),cuotas); 

alert("Abonarás " + cuotas + " cuota/s de " + (Math.ceil(total)));

//break;}

//else{
    alert("Solo hasta 6 cuotas");
//}

//} 


listado(listaServicios);

let boton = document.getElementById("btnLimpiar");

boton.onclick = () => {
    listaServicios.remove();
 }
