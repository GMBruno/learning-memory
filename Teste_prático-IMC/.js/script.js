function start(){
    var buttonCalculateImc = document.querySelector("#button-calculate-imc");
    buttonCalculateImc.addEventListener("click", handleButtonClick);
    
    handleButtonClick();
}

function calculateIMC(weight, height){
  return (weight)/(height*height);
}

function handleButtonClick(){
  var inputWeight = document.querySelector("#input-weight");
  var inputHeight = document.querySelector("#input-height");
  var imcResult = document.querySelector("#imc-result");

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  
  var imc = calculateIMC(weight,height);
  var formattedIMC = imc.toFixed(2).replace(".",",");

  imcResult.textContent = formattedIMC;

  var context = "";

  if(imc >= 16 && imc<=16.9){
   context = "Muito abaixo do peso";
} else if(imc >= 17 && imc <= 18.4){
   context = "Abaixo do peso";
} else if(imc >= 18.5 && imc <= 24.9){
   context = "Peso normal";
} else if (imc >= 25 && imc <= 29.9){
   context = "Acima do peso";
} else if(imc >= 30 && imc <= 34.9){
   context = "Obesidade Grau I";
} else if (imc >= 35 && imc <= 40) {
   context = "Obesidade Grau II";
} else if(imc > 40){
   context = "Obesidade Grau III ou Mórbida";
} else if (imc< 16){
   context = "Dados inválidos";
}

  level.textContent = `${context}`;

}



start();