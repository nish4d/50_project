document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = takeInput('deposit-field');
    if(isNaN(depositField)){
        alert('Please enter a valid number');
        return;
    }
    const depositAmount = takeAmount('deposit-amount');
    const totalAmount = depositAmount + depositField;
    // alert(totalAmount)
    const balanceAmount = takeAmount('balance-amount');
    const totalBalance = balanceAmount + depositField;
    paseValue('deposit-amount', totalAmount);
    paseValue('balance-amount', totalBalance);
})