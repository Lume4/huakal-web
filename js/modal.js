/////////////////////////////
/////////// Modal UPCA //////
/////////////////////////////

// Modal
var modal = document.getElementById('utahModal');

// Botón de abrir
var trigger = document.getElementById("utahTrigger");

// Botón de cerrar
var cerrar = document.getElementsByClassName("utahClose")[0];

// Botón de abrir
trigger.onclick = function() {
    modal.style.display = "block";
}

// Botón de cerrar
cerrar.onclick = function() {
    modal.style.display = "none";
}

// Cerrar cuando outClick
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/////////////////////////////
/////////// Modal Televisa //////
/////////////////////////////

// Modal
var modalTelevisa = document.getElementById('informe17Modal');

// Botón de abrir
var triggerTelevisa = document.getElementById("informe17Trigger");

// Botón de cerrar
var cerrarTelevisa = document.getElementsByClassName("informe17Close")[0];

// Botón de abrir
triggerTelevisa.onclick = function() {
    modalTelevisa.style.display = "block";
}

// Botón de cerrar
cerrarTelevisa.onclick = function() {
    modalTelevisa.style.display = "none";
}

// Cerrar cuando outClick
window.onclick = function(event) {
    if (event.target == modalTelevisa) {
        modalTelevisa.style.display = "none";
    }
}

/////////////////////////////
/////////// Modal Sunbelt //////
/////////////////////////////

// Modal
var modalSunbelt = document.getElementById('sunbeltModal');

// Botón de abrir
var triggerSunbelt = document.getElementById("sunbeltTrigger");

// Botón de cerrar
var cerrarSunbelt = document.getElementsByClassName("sunbeltClose")[0];

// Botón de abrir
triggerSunbelt.onclick = function() {
    modalSunbelt.style.display = "block";
}

// Botón de cerrar
cerrarSunbelt.onclick = function() {
    modalSunbelt.style.display = "none";
}

// Cerrar cuando outClick
window.onclick = function(event) {
    if (event.target == modalSunbelt) {
        modalSunbelt.style.display = "none";
    }
}

/////////////////////////////
/////////// Modal NMKT //////
/////////////////////////////

// Modal
var modalNmkt = document.getElementById('nmktModal');

// Botón de abrir
var triggerNmkt = document.getElementById("nmktTrigger");

// Botón de cerrar
var cerrarNmkt = document.getElementsByClassName("nmktClose")[0];

// Botón de abrir
triggerNmkt.onclick = function() {
    modalNmkt.style.display = "block";
}

// Botón de cerrar
cerrarNmkt.onclick = function() {
    modalNmkt.style.display = "none";
}

// Cerrar cuando outClick
window.onclick = function(event) {
    if (event.target == modalNmkt) {
        modalNmkt.style.display = "none";
    }
}

/////////////////////////////
/////////// Modal EOSCAPITAL //////
/////////////////////////////

// Modal
var modalEos = document.getElementById('eoscapitalModal');

// Botón de abrir
var triggerEos = document.getElementById("eoscapitalTrigger");

// Botón de cerrar
var cerrarEos = document.getElementsByClassName("eoscapitalClose")[0];

// Botón de abrir
triggerEos.onclick = function() {
    modalEos.style.display = "block";
}

// Botón de cerrar
cerrarEos.onclick = function() {
    modalEos.style.display = "none";
}

// Cerrar cuando outClick
window.onclick = function(event) {
    if (event.target == modalEos) {
        modalEos.style.display = "none";
    }
}