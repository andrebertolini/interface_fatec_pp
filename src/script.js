function menu() {
    document.getElementById("login").style.display = "none";
    document.getElementById("menu").style.display = "flex";
    document.getElementById("avisos").style.display = "flex";
    document.getElementById("dados").style.display = "flex";
    now = new Date;    
    mes = now.getMonth()+1;     
    if (mes != 1) {
        document.getElementById("divMatricula").style.backgroundColor = "red";
    } else {
        document.getElementById("divMatricula").style.backgroundColor = "green";
    }

}

