

document.getElementById('discount-btn').addEventListener('click', function(){
    const prices = document.getElementById('current-price');
    const priceString = prices.innerText;
    const price = parseFloat(priceString);

    const totalPrices = document.getElementById('total-price');
    const discount = price * 0.3;
    totalPrices.innerText = price - discount;

    // alert(price)
})