function menu() {
    document.getElementById("login").style.display = "none";
    document.getElementById("menu").style.display = "flex";
    document.getElementById("avisos").style.display = "flex";
    document.getElementById("dados").style.display = "flex";
    now = new Date;    
    mes = now.getMonth()+1;     
    if (mes != 1) {
        document.getElementById("matricula").style.backgroundColor = "red";
    } else {
        document.getElementById("matricula").style.backgroundColor = "green";
    }

}

function agenda() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("agenda").style.display = "flex";

}

function ihc() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("ihc").style.display = "flex";

}

function con() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("con").style.display = "flex";

}

function historico() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("historico").style.display = "flex";

}

function horario() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("horario").style.display = "flex";

}





