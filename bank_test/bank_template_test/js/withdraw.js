document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = takeInput('withdraw-field');
    if(isNaN(withdrawField) || withdrawField <= 0){
        alert('Please enter a valid number');
        return;
    }
    if(isNaN(withdrawField)){
        alert('Please enter a valid number');
        return;
    }
    // alert(withdrawField)
    const withdrawAmount = takeAmount('withdraw-amount');
    const totalAmount = withdrawAmount + withdrawField;
    const balanceAmount = takeAmount('balance-amount');
    const totalBalance = balanceAmount - withdrawField;
    if(withdrawField>balanceAmount){
        alert('Insufficient funds');
        return;
    }
    paseValue('withdraw-amount', totalAmount);
    paseValue('balance-amount', totalBalance);
})