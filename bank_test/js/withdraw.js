document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawFields = document.getElementById('withdraw-field');
    const withdrawField = withdrawFields.value;
    const withdrawFieldString = parseFloat(withdrawField);
    // alert(typeof withdrawFieldString);
    withdrawFields.value = '';

    if(isNaN(withdrawFieldString)){
        alert('Invalid Number');
        return;
    }


 
    const withdrawAmounts = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawAmounts.innerText;
    const withdrawAmountString = parseFloat(withdrawAmount);
    // alert(typeof withdrawAmountString);
    

    // ----------------
    
    const balanceAmounts = document.getElementById('balance-amount');
    const balanceAmount =balanceAmounts.innerText;
    const balanceAmountString = parseFloat(balanceAmount);

    if(withdrawFieldString>balanceAmountString){
        alert('Insufficient funds');
        return;
    }
    withdrawAmounts.innerText = withdrawAmountString + withdrawFieldString;

    balanceAmounts.innerText = balanceAmountString - withdrawFieldString;
})