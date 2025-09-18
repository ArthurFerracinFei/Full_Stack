let r = Math.random() * 100
let f = Math.floor(r)
console.log(f)

function Guess(){
    let text = parseInt(document.getElementById("GuessNumber").value)
 

    if(text == f){
        document.getElementById("Resultado").innerHTML = "Você Acertou"
        document.getElementById("Resultado").style.backgroundColor = "green"

        document.getElementById("GrandesTentativas").innerHTML = " ";
        document.getElementById("PequenasTentativas").innerHTML = " ";

    }else if(text > f){
        document.getElementById("Resultado").innerHTML = "seu numero é mt alto"
        document.getElementById("Resultado").style.backgroundColor = "red"



        let resposta = document.getElementById("GrandesTentativas").innerHTML + " " + text;
        document.getElementById("GrandesTentativas").innerHTML = resposta
        

    }else if(text < f){
        document.getElementById("Resultado").innerHTML = "seu numero é mt baixo"
        document.getElementById("Resultado").style.backgroundColor = "red"



        let resposta = document.getElementById("PequenasTentativas").innerHTML + " " + text;
        document.getElementById("PequenasTentativas").innerHTML = resposta
    }   
    

}