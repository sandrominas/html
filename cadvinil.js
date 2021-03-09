const cadastrar = document.getElementById("cadastrar");

function validar() {
    var nomedisco = document.getElementById("nomevinil").value;
    var erronomevinil = document.getElementById("erronomevinil");
    var nomeartista = document.getElementById("nomeartista").value;
    
    if (nomedisco == "") {
        erronomevinil.textContent = "Nome do disco deve ser digitado";
    }
}

cadastrar.addEventListener("click", validar);