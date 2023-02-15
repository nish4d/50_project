/* basic */
// function phnNumber(id){
//     const phnInputs = document.getElementById('phn-input');
//     const phnInputString = phnInputs.value;
//     const phnInput = parseInt(phnInputString);
//     if(id == true){
//         phnInputs.value = phnInput +1;
//     }else{
//         phnInputs.value = phnInput -1;
//     }
//     const newPhnInputs = phnInputs.value;
//     return newPhnInputs;
// }
// function addPhn(phnValue){
//     const newPhnNumber = phnValue * 1219;
//     const phnAmount = document.getElementById('phn-amount');
//     phnAmount.innerText = newPhnNumber;

// }
// document.getElementById('btn-phn-plus').addEventListener('click', function(){
//     const phnValue =  phnNumber(true);
//     addPhn(phnValue)
// })
// document.getElementById('btn-phn-minus').addEventListener('click', function(){
//     const phnValue = phnNumber(false);  
//     addPhn(phnValue)
// })

/* semi advance */

document.getElementById('btn-phn-plus').addEventListener('click', function(){
    const phnValue =  phnNumber(true , 'phn-input');
    addPhn(phnValue)
    currentTotal()
    // const subTotalAmount =  subTotalId('phn-amount') + subTotalId('case-amount');
    // subtotalAmountId('sub-total',subTotalAmount)


})
document.getElementById('btn-phn-minus').addEventListener('click', function(){
    const phnValue = phnNumber(false,'phn-input');  
    addPhn(phnValue)
    // const subTotalAmount =  subTotalId('phn-amount') + subTotalId('case-amount');
    // subtotalAmountId('sub-total',subTotalAmount)
    currentTotal()
})