const products = [
    {name: 'phone', price: 4500, model: 'samsung'},
    {name: 'laptop', price: 45000, model: 'lenovo'},
    {name: 'AC', price: 50000, model: 'Gree'},
    {name: 'Mouse', price: 500, model: 'A4 Tech'},
]

const newProduct = {name: 'keyboard', price: 1000, model: 'Micropack'}

// Add new item with totally make a new array 
const newArray = [...products, newProduct]
console.log(newArray);

// ekhon ami uporer array theke laptop namer item take remove kore notun arekti array te rakhbo 

const remainingProduct = products.filter(product => product.name !== 'laptop');
console.log(remainingProduct);