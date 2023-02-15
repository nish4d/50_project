function getInputValue(getId){
    const getInputs = document.getElementById(getId)
    const getInputsString = getInputs.value;
    if (isNaN(getInputsString)){
        return;
    }
    const getInput = parseInt(getInputsString);
    // getInputs.value = '';
    return getInput;
}
function balanceInputValue(id,value){
    const balanceValue = document.getElementById(id);
    balanceValue.innerText = value;
}
document.getElementById('btn-calculate').addEventListener('click', function(){
    const currentFood = getInputValue('current-food');
    const currentRent = getInputValue('current-rent');
    const currentCloth = getInputValue('current-cloth');
    if(currentFood<0){
        alert("Please enter a positive number");
        return;
    }else if(currentRent<0){
        alert("Please enter a positive number");
        return;
    }else if(currentCloth<0){
        alert("Please enter a positive number");
        return;
    }
    
    const currentTotal = currentFood + currentRent + currentCloth;
    const incomes = document.getElementById('income').value;
    if(isNaN(currentTotal) || currentTotal === ""){
        alert("Please enter a number");
        return;
    }else if(isNaN(incomes) || incomes === "" || incomes<0){
        alert("Please enter a number");
        return;
    }
    
    
    if(currentTotal>incomes){
        alert('You do not have enough money');
        return;
    }

    balanceInputValue('total-express',currentTotal);
    const balance = incomes - currentTotal;
    balanceInputValue('balance-value',balance);
})
document.getElementById('btn-save').addEventListener('click', function(){
    const balanceAmount = document.getElementById('balance-value').innerText;
    const balance = parseInt(balanceAmount);
    const saveInput = getInputValue('save-input');
    const income = document.getElementById('income').value;
    if(isNaN(saveInput) || saveInput === "" || saveInput<0){
        alert("Please enter a number");
        return;
    }else if(isNaN(income) || income === "" || income<0){
        alert("Please enter a number");
        return;
    }
    
    const savingAmount = ((income*saveInput)/100);
    if(savingAmount>balance){
        alert('You do not have enough money');
        return;
    }
    balanceInputValue('saving-value', savingAmount);
    const remainingBalance = balance - savingAmount;
    balanceInputValue('remaining-value', remainingBalance);
})