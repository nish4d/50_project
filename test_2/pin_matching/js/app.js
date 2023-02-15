function randomCheck(){
    const check = mathRandom() + '';
    if(check.length == 4){
        return check;
    } else{
        return randomCheck();
    }
}

function mathRandom(){
    const random = Math.round(Math.random()*10000);
    return random;
}

// function generatePin() {
//     // Generate a random integer between 1000 and 9999
//     const pin = Math.floor(Math.random() * 9000) + 1000;
    
//     // Return the PIN as a string
//     return pin.toString();
//   }

document.getElementById('generate-pin').addEventListener('click', function(){
    const generate = randomCheck() ;
    // const generate = generatePin() ;
    // console.log(generate)
    const generatorInput = document.getElementById('generator-input');
    generatorInput.value = generate;

})

document.getElementById('calculator').addEventListener('click', function(e){
    const number = e.target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
    const typeFieldsNumbers = typeNumberField.value;
    if(isNaN(number)){
        if(number == 'C'){
            typeNumberField.value = '';
        }else if(number == '<'){
            const type = typeFieldsNumbers.split('');
            type.pop();
            const result = type.join('');
            // console.log(result)
            typeNumberField.value = result;
        }
    }
    else{
        
        const typeField = typeFieldsNumbers +number;
        typeNumberField.value = typeField;
    }

})
document.getElementById('submit').addEventListener('click', function(){
    const generateInputs = document.getElementById('generator-input');
    const generatorInput = generateInputs.value;
    const calInputs = document.getElementById('type-numbers');
    const calInput = calInputs.value;
    const pinSuccess = document.getElementById('pin-success');
    const pinWrong = document.getElementById('pin-wrong');
    if(generatorInput === calInput){
        pinSuccess.style.display = 'block';
        pinWrong.style.display = 'none';

    }else{
        pinWrong.style.display = 'block';
        pinSuccess.style.display = 'none';
    }

})