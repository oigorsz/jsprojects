const buttonCalcular = document.getElementById("button-calcular");
const buttonLimpar = document.getElementById("button-limpar");
const mainResult = document.getElementById("main-result");

window.onload = function() {
    document.getElementById("massa").focus();
};

function calcular(){
    const massa = document.getElementById("massa").value;
    const altura = document.getElementById("altura").value;
    const resultNumber = document.getElementById("result-number");
    const resultText = document.getElementById("result-text");
    const resultIcon = document.getElementById("result-icon");

    if(massa != '' && altura != ''){
        if(!isNaN(massa) && massa > 0 && !isNaN(altura)  && altura > 0) {
            let imc = massa/(altura*altura);
    
            mainResult.style.display = "flex";
            buttonLimpar.style.display = "flex";
            buttonCalcular.style.display = "none";
    
            resultNumber.innerText = `O Seu IMC é de ${imc.toFixed(2)}.`;
    
            if (imc < 18.5){
                resultText.innerText = `Estado: baixo peso.`;
                resultIcon.classList.remove("fa-face-smile");
                resultIcon.classList.add("fa-face-frown");
                resultIcon.style.color = "red";
            } else if(imc <= 24.9){
                resultText.innerText = `Estado: peso adequado.`;
    
            } else if(imc <= 29.9){
                resultText.innerText = `Estado: sobrepeso.`;
                resultIcon.classList.remove("fa-face-smile");
                resultIcon.classList.add("fa-face-meh");
                resultIcon.style.color = "yellow";
            } else if(imc <= 34.9){
                resultText.innerText = `Estado: obesidade I`;
                resultText.innerText = `Estado: sobrepeso.`;
                resultIcon.classList.remove("fa-face-smile");
                resultIcon.classList.add("fa-face-meh");
                resultIcon.style.color = "red";
            } else if(imc <= 39.9){
                resultNumber.innerText = `Estado: obesidade II`;
                resultIcon.classList.remove("fa-face-smile");
                resultIcon.classList.add("fa-face-frown");
                resultIcon.style.color = "red";
            } else {
                resultNumber.innerText = `Estado: obesidade III`
                resultIcon.classList.remove("fa-face-smile");
                resultIcon.classList.add("fa-face-frown");
                resultIcon.style.color = "red";
            }
        } else {
            alert("Digite valores válidos");
        }
    } else {
        alert("Preencha os campos abaixo");
    }

    

}

function limpar(){
    location.reload();
}

buttonCalcular.addEventListener("click", calcular);
buttonLimpar.addEventListener("click", limpar);
