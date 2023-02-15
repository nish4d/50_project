function phnNumber(id,val){
    const phnInputs = document.getElementById(val);
    const phnInputString = phnInputs.value;
    const phnInput = parseInt(phnInputString);
    if(id == true){
        phnInputs.value = phnInput +1;
    }else{
        phnInputs.value = phnInput -1;
    }
    const newPhnInputs = phnInputs.value;
    return newPhnInputs;
}
function addPhn(phnValue){
    const newPhnNumber = phnValue * 1219;
    const phnAmount = document.getElementById('phn-amount');
    phnAmount.innerText = newPhnNumber;

}
function caseNumber(btnInput){
    const newNumber = btnInput * 59;
    const caseAmount = document.getElementById('case-amount');
    caseAmount.innerText = newNumber;
}
function subtotalAmountId(elementId,elementValue){
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = elementValue;
    return elementValue;
}
function subTotalId(elementId){
    const phnTotalAmounts = document.getElementById(elementId);
    const phnTotalString = phnTotalAmounts.innerText;
    const phnTotalAmount = parseInt(phnTotalString);
    return phnTotalAmount;
}
function currentTotal(){
    const currentPhnTotal = subTotalId('phn-amount');
    const currentCaseTotal = subTotalId('case-amount');
    const currentSubTotals = currentPhnTotal + currentCaseTotal;

    const subTotalsAmount = subtotalAmountId('sub-total',currentSubTotals);
    const taxTotal = (subTotalsAmount * 0.08).toFixed(2);
    subtotalAmountId('tax-total',taxTotal);
    const totalAmounts = (parseFloat(subTotalsAmount) + parseFloat(taxTotal)).toFixed();
    subtotalAmountId('total-amount',totalAmounts);
}
