let a = 0;
let grandTotal = 0;

function tableValue(a,productTitle,productPrice,productQuantity,productTotal,grandTotal){

const tBody = document.getElementById('t-body');
const tr = document.createElement('tr');
tr.innerHTML = `
                     <td>${a}</td> 
                      <td>${productTitle}</td> 
                      <td>${productPrice}</td> 
                      <td>${productQuantity}</td> 
                      <td>${productTotal}</td> 
                      <td class="grands">${grandTotal}</td>
                      
`;
//const grands = document.getElementsByClassName('grands').innerText;
tBody.appendChild(tr);
const allTotal = document.getElementById('all-total');
    // console.log(grandTotal)
allTotal.innerText = grandTotal;
}
// double function


// this main section
function title(title){
    const productTitle = document.getElementById(title).innerText; 
    return productTitle;  
}
function price(price){
    const productPrices = document.getElementById(price).innerText;
    const productPrice = parseInt(productPrices);
    return productPrice;
}


document.getElementById('btn-coffee').addEventListener('click', function(e){
    a += 1;
    const coffeeTitle = title('coffee-title');
    const coffeePrice = price('coffee-price');
    const coffeeQuantity = price('coffee-quantity');
    const coffeeTotal = coffeePrice * coffeeQuantity;
    grandTotal += coffeeTotal;
    tableValue(a,coffeeTitle,coffeePrice,coffeeQuantity,coffeeTotal,grandTotal);
    const disable = e.target;
    disable.setAttribute('disabled','disabled');
    
})

document.getElementById('btn-heart').addEventListener('click', function(e){
    a += 1;
    const heartTitle = title('heart-title');
    const heartPrice = price('heart-price');
    const heartQuantity = price('heart-quantity');
    const heartTotal = heartPrice - heartQuantity;
     grandTotal += heartTotal;

    tableValue(a,heartTitle,heartPrice,heartQuantity,heartTotal,grandTotal);
    const disable = e.target;
    disable.setAttribute('disabled','disabled');
    
})
document.getElementById('btn-panda').addEventListener('click', function(e){
    a += 1;
    const pandaTitle = title('panda-title');
    const pandaPrice = price('panda-price');
    const pandaQuantity = price('panda-quantity');
    const pandaTotal = pandaPrice + pandaQuantity;
     grandTotal += pandaTotal;

    tableValue(a,pandaTitle,pandaPrice,pandaQuantity,pandaTotal,grandTotal);
    const disable = e.target;
    disable.setAttribute('disabled','disabled');
    
})
document.getElementById('btn-umbrella').addEventListener('click', function(e){
    a += 1;
    const umbrellaTitle = title('umbrella-title');
    const umbrellaPrice = price('umbrella-price');
    const umbrellaQuantity = price('umbrella-quantity');
    const umbrellaTotal = parseInt(umbrellaPrice / umbrellaQuantity);
     grandTotal += umbrellaTotal;

    tableValue(a,umbrellaTitle,umbrellaPrice,umbrellaQuantity,umbrellaTotal,grandTotal);
    const disable = e.target;
    disable.setAttribute('disabled','disabled');
    
})

document.getElementById('btn-vue').addEventListener('click', function(e){
    a += 1;
    const vueTitle = title('vue-title');
    let vuePrices = document.getElementById('vue-price');
    const vuePrice = vuePrices.value;

    const vueQuantiTys = document.getElementById('vue-quantity');
    const vueQuantity = vueQuantiTys.value;
    if(vuePrice < 0){
        alert('Please enter a valid price');
        return;
    }else if(vueQuantity<0){
        alert('Please enter a valid quantity');
        return;
    }
    const vueTotal = parseInt(vuePrice * vueQuantity);
    if(isNaN(vueTotal) || vueTotal == ''){
        alert('Please enter a valid title');
        return;
    }
    
    grandTotal += vueTotal;


    tableValue(a, vueTitle,vuePrice,vueQuantity,vueTotal,grandTotal)
    const disable = e.target;
    disable.setAttribute('disabled','disabled');
    vuePrices.value = '';
    vueQuantiTys.value = '';
    
})







  