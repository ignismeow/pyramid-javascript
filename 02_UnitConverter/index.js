/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputText = document.getElementById("input-text")
const btn = document.getElementById("convert-btn")
const lengthParaText = document.getElementById("length-text")
const volumeParaText = document.getElementById("volume-text")
const massParaText = document.getElementById("mass-text")

inputText.addEventListener("input", function() {
    inputText.style.width = inputText.offsetWidth + "px"; // Set width to current content width
  });


btn.addEventListener("click", function(){
    let meter = inputText.value * 3.281
    let feet = inputText.value * 0.304
    let liters = inputText.value * 0.264
    let gallons = inputText.value * 3.785
    let pounds = inputText.value * 2.204
    let kilos = inputText.value * 0.453
    
    lengthParaText.textContent = `${inputText.value} meters = ${meter.toFixed(2)} feet  |  ${inputText.value} feet = ${feet.toFixed(2)} meters`
    volumeParaText.textContent = `${inputText.value} liters = ${liters.toFixed(2)} gallons  |  ${inputText.value} gallons = ${gallons.toFixed(2)} liters`
    massParaText.textContent = `${inputText.value} kilos = ${pounds.toFixed(2)} pounds  |  ${inputText.value} pounds = ${kilos.toFixed(2)} kilos`
    
    inputText.value = ""
    
    // 20 meters = 65.616 feet | 20 feet = 6.096 meters
    // 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
    // 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

})
