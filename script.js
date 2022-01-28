
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/


// bloqueador de caracteres A-Z - 0-9 e caracteres especiais//

const brandInput = document.querySelector ("#input-texto")
brandInput.addEventListener("keypress", function(e) {

    if(!checkChar(e)){
    e.preventDefault();

}

});

function checkChar(e){

    const char = String.fromCharCode(e.keyCode);

    const pattern = '[a-z]';

    if(char.match(pattern)) {
        console.log(char);
    return true;
}

}
    



// botão criptografar mensagem//
const btnCripto = document.querySelector("#btn-cripto");

    btnCripto.addEventListener("click", function(e){

        e.preventDefault();

        const name = document.querySelector("#input-texto");

        const value = name.value;

        var textoFinal = value;
        
        textoFinal = textoFinal.replace(/e/g, "enter");
        textoFinal = textoFinal.replace(/i/g, "imes");
        textoFinal = textoFinal.replace(/a/g, "ai");
        textoFinal = textoFinal.replace(/o/g, "ober");
        textoFinal = textoFinal.replace(/u/g, "ufat");

        document.getElementById("msg").value = textoFinal;
        console.log(textoFinal);

})

// botão descriptografar mensagem//
const btnDescripto = document.querySelector("#btn-descripto");

    btnDescripto.addEventListener("click", function(e){

        e.preventDefault();

        const name = document.querySelector("#input-texto");

        const value = name.value;

        var textoFinal = value;

        textoFinal = textoFinal.replace(/enter/g, "e");
        textoFinal = textoFinal.replace(/imes/g, "i");
        textoFinal = textoFinal.replace(/ai/g, "a");
        textoFinal = textoFinal.replace(/ober/g, "o");
        textoFinal = textoFinal.replace(/ufat/g, "u");

        document.getElementById("msg").value = textoFinal;
        console.log(textoFinal)



        
})

//botão selecionar e copiar para zona de transferência//

let btnCopy = document.querySelector("#btn-copy");
    btnCopy.addEventListener("click", function(e){
    e.preventDefault();

        let textArea = document.querySelector("#msg");
        textArea.select();
        textArea.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Texto Copiado!")

})




    

















