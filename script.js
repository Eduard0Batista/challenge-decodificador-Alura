const escreveTexto = document.querySelector(".escreve-texto");
const encriptado = document.querySelector(".texto-encriptado");

function btnEncriptar() {
    const textoEncriptado = encriptar(escreveTexto.value);
    encriptado.value = textoEncriptado;
    escreveTexto.value = "";
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" ,"enter"] , ["i" ,"imes"], ["a" ,"ai"] , ["o" ,"ober"], ["u" ,"ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(escreveTexto.value);
    encriptado.value = textoDesencriptado;
}


function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}


const textInput = document.getElementById("encriptado");
const copyButton = document.getElementById("copiatexto");

copyButton.addEventListener("click", ()=> {
	textInput.select();
	document.execCommand("copy");
});