
function imprimeTexto(){
    let texto = document.getElementById("in_text").value
    console.log(texto)
}

function Incrementa(){
    let X = parseInt(document.getElementById("in_number1").value)

    document.getElementById("resposta_e").innerHTML = "";
    for (let i= 0; i < X;i++){
        console.log(i)
        let resposta = document.getElementById("resposta_e").innerHTML + " " + i
        document.getElementById("resposta_e").innerHTML = resposta;
    }
}

function Somar(){
    let soma1 = parseInt(document.getElementById("soma1").value)
    let soma2 = parseInt(document.getElementById("soma2").value)

    let resposta = soma1 + soma2
    console.log(resposta)
    document.getElementById("resposta_somar").innerHTML = resposta
}

function imprimeCalculo(){
    let a = parseInt(document.getElementById("in_Num1_e4").value);
    let b = parseInt(document.getElementById("in_Num2_e4").value);

    let c = 0
    if(a < 0 || b < 0){
        c = a + b
    }else{
        c = a * b
    }
    document.getElementById("resposta_e3").innerHTML = c
}