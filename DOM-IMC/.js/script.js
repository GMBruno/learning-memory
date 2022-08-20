function start(){
    var buttonCalculateImc = document.querySelector("#button-calculate-imc");
    buttonCalculateImc.addEventListener("click", handleButtonClick);

    var inputWeight = document.querySelector("#input-weight");
    var inputHeight = document.querySelector("#input-height");
    inputWeight.addEventListener("input",handleButtonClick);
    inputHeight.addEventListener("input",handleButtonClick);

    handleButtonClick();
}

function calculateIMC(weight,height){
return imc = weight/(height*height);
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
}
start();