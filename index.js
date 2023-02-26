const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let alertMessage = document.getElementById("alert-message")
let lengthConverted = document.getElementById("length-converted")
let volumeConverted = document.getElementById("volume-converted")
let massConverted = document.getElementById("mass-converted")

convertBtn.addEventListener("click", function () {
    let a = Number(inputEl.value)

    inputEl.value = ""
    alertMessage.textContent = ""
    if (a > 0) {
        render(a)
    } else {
        alertMessage.textContent = "Enter a number greater than zero"
    }
})
function render(a) {
    lengthConverted.textContent = `${a} metres = ${(a * 3.281).toFixed(3)} feet 
    ${a} feet = ${(a / 3.281).toFixed(3)} metres`
    volumeConverted.textContent = `${a} litres = ${(a * 0.264).toFixed(3)} gallons 
    ${a} gallons = ${(a / 0.264).toFixed(3)} litres`
    massConverted.textContent = `${a} kilos = ${(a * 2.204).toFixed(3)} pounds 
    ${a} pounds = ${(a / 2.204).toFixed(3)} kilos`
}