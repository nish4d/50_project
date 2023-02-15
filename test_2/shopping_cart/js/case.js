/*
function plusMinus(id){
    const caseInputs = document.getElementById('case-input');
    const caseInputString = caseInputs.value;
    const caseInput = parseInt(caseInputString);
    
    // if(id == true){
    //     caseInputs.value = caseInput + 1;
    // }else{
    //     caseInputs.value = caseInput - 1;
    // }
    // let newCase = caseInputs.value;
    // return newCase;


    let newCaseNumber;
    if(id == true){
        newCaseNumber = caseInput + 1;
    }else{
        newCaseNumber = caseInput - 1;
    }
    caseInputs.value = newCaseNumber;
    return newCaseNumber;
    
} 
function caseNumber(btnInput){
    const newNumber = btnInput * 59;
    const caseAmount = document.getElementById('case-amount');
    caseAmount.innerText = newNumber;
}
*/

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const btnInput = phnNumber(true,'case-input');
    caseNumber(btnInput);
    currentTotal()
    // alert(newNumber)
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const btnInput = phnNumber(false, 'case-input');
    caseNumber(btnInput);
    currentTotal()
})