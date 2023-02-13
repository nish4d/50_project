document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = takeInput('deposit-field');
    const depositAmount = takeAmount('deposit-amount');
    const totalAmount = depositAmount + depositField;
    // alert(totalAmount)
    paseValue('deposit-amount', totalAmount);
    const balanceAmount = takeAmount('balance-amount');
    const totalBalance = balanceAmount + depositField;
    paseValue('balance-amount', totalBalance);
})