//VARIABLES
const prices = document.querySelectorAll('.price');
const names = document.querySelectorAll('.name');
const addToCartButtons = document.querySelectorAll('.btn-success');
const productImage = document.querySelectorAll('.img');
const modalPrice = document.querySelector('.modal-price');
const modalName = document.querySelector('.modal-name');
const modalImage = document.querySelector('.modal-image');
const modalBody = document.querySelector('.modal-body');
const total = document.querySelector('.total');
var button1 = document.createElement('button');
var button2 = document.createElement('button');
const addedNotification = document.querySelector('.added-notification')
let totalPrice = 0;
if(!addToCartButtons){
    modalBody.innerHTML = "You have not add any product"
}

//  Details of the product

function productDetails(priceOfProduct, imageOfProduct, nameOfProduct) {
    const productContainer = document.createElement('div');
    productContainer.classList.add('productContainer');
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    const proContainer = document.createElement('div');
    const modalQuantity = document.createElement('div');
    
    // Create new instances of buttons for each product
    var button1 = document.createElement('button');
    var button2 = document.createElement('button');
    button1.innerHTML = "-";
    button2.innerHTML = "+";
    button1.classList.add('red');
    button2.classList.add('green');

    // Add event listeners to the buttons
    let counter = 1;
    modalQuantity.innerHTML = counter;
    button1.addEventListener('click', () => decrease(priceOfProduct));
    button2.addEventListener('click', () => increase(priceOfProduct));

    function decrease(priceOfProduct) {
        if (counter > 1) {
            counter--;
           
            modalQuantity.textContent = counter;
            
            totalPrice -= priceOfProduct;
            total.textContent = "Total Price: $" + totalPrice.toFixed(2);
        }
    }

    function increase(priceOfProduct) {
        counter++;
        modalQuantity.textContent = counter;
        totalPrice += priceOfProduct;
        total.textContent = "Total Price: $" + totalPrice.toFixed(2);
    }

    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(modalQuantity);
    buttonContainer.appendChild(button2);

    proContainer.innerHTML =  `
        <h5>${nameOfProduct}</h5>
        <h6>Price:$${priceOfProduct}</h6>
    `;

    productContainer.innerHTML = `
        <img src="${imageOfProduct}" style="max-width: 160px;">
    `;

    productContainer.appendChild(proContainer);
    productContainer.appendChild(buttonContainer);
    
    modalBody.appendChild(productContainer);


}


let counter = 1
const modalQuantity = document.createElement('div');
// Increase Function for The add to cart button
function increase(priceOfProduct) {
    counter++;

    modalQuantity.textContent = counter;
    totalPrice += priceOfProduct;
    total.textContent = "Total Price: $" + totalPrice.toFixed(2);
}

//  ADD TO CART BUTTON FUNCTIONALITY
addToCartButtons.forEach((addToCartButton, index) => {
    addToCartButton.addEventListener('click', () => {
    
    addToCartButton.disabled = true;
    // addToCartButton.classList.remove('.btn-success')
    addedNotification.style.display = "block"
  
    setTimeout(function() {
        addedNotification.style.display = "none";
    }, 3000); 
   
    addToCartButton.textContent = 'Added to Cart';
  
        const priceOfProduct = parseFloat(prices[index].textContent);
        increase(priceOfProduct)
        // total.textContent = priceOfProduct
        const nameOfProduct = names[index].textContent;
        const imageOfProduct = productImage[index].src;
        productDetails(priceOfProduct, imageOfProduct, nameOfProduct);

     

    });
});

// EVENT TO THE HEART BUTTON
let countWish = document.querySelector('.count-wish');
let countForWish = 0;

const FaHearts = document.querySelectorAll('.faheart').forEach(faHeart => {
    faHeart.addEventListener('click', () => {
        
        countForWish += faHeart.classList.contains('fa-solid') ? -1 : 1;
        countWish.innerHTML = countForWish;
        faHeart.classList.toggle('fa-solid');
        faHeart.classList.add('faheart');
    });
});


// EVENT TO THE ADD TO CART ICON BUTTON
let count = 0
const countContent = document.querySelector('.count')

const addCartButtons = document.querySelectorAll('.add').forEach(addToCartButton =>{
    addToCartButton.addEventListener('click', () =>{
        count ++;
    countContent.innerHTML = count
  
   
       
    
    
    })
    
})


