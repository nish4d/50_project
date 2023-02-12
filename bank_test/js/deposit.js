document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositFields = document.getElementById('deposit-field');
    const depositField = depositFields.value;
    const depositFieldString = parseFloat(depositField);
    // alert(typeof depositFieldString);
    depositFields.value = '';
    if(isNaN(depositFieldString)){
        alert('Please enter a valid number');
        return;
    }
    // if(typeof depositField != 'number'){
    //     alert('Please enter a valid number');
    //     return;
    // }
    const depositAmounts = document.getElementById('deposit-amount');
    const depositAmount =depositAmounts.innerText;
    const depositAmountString = parseFloat(depositAmount);
    // alert(typeof depositAmountString)
    const totalDeposit = depositAmountString + depositFieldString;
    depositAmounts.innerText = totalDeposit;

    const balanceAmounts = document.getElementById('balance-amount');
    const balanceAmount =balanceAmounts.innerText;
    const balanceAmountString = parseFloat(balanceAmount);
    balanceAmounts.innerText = balanceAmountString + depositFieldString;

})