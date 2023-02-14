document.getElementById('discount-btn').addEventListener('click', function(){
    const takeCoupons = document.getElementById('take-coupon');
    const takeCoupon = takeCoupons.value;
    const currentPrice = document.getElementById('current-price').innerText;
    const totalPrices = document.getElementById('total-price');
    const totalPrice = totalPrices.innerText;
    // alert(takeCoupon)

    if(takeCoupon === 'DISC30'){
        const discount = currentPrice * 0.3;
        totalPrices.innerText = currentPrice -  discount;
        // totalPrices.innerText = currentPrice;

    }
    else{
        alert('Wrong coupon code');
        totalPrices.innerText = currentPrice;
    }
})