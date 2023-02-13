function takeInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputValue;
}
function takeAmount(amountId){
    const amountField = document.getElementById(amountId);
    const amountFieldString = amountField.innerText;
    const amountValue = parseFloat(amountFieldString);
    return amountValue;
}
function paseValue(amountIds, totalValue){
    const total = document.getElementById(amountIds);
    total.innerText = totalValue;
}