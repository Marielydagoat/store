if(document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded")
}else{
    ready()
}
function ready(){}

let cart = [];
let quantity = document.getElementsByClassName('.cart-quantity-input')
let RemoveFromCart = document.getElementsByClassName('btn-danger')
for( let i = 0; i < removeEventListener.length; i++){
    let button = RemoveFromCart[i]
    button.addEventListener('click', function(event){
       let buttonClick = event.target 
      buttonClick.parentElement.parentElement.remove()
    })
    }

// function AddToCart(itemButton){
//     // 1) Get the elements from the html: title, price, image
//     let shopItem = itemButton.parentElement.parentElement;
//     let title = shopItem.querySelector('.shop-item-title').innerText;
    
//     // 2) Check if the product is already in the cart
//     cart.find(function(currentitem){
//         return shopItem == currentitem
//      });
    
    //  if(cart.includes(function(currentitem))){
    // alert("item is already in cart")
    // setTimeout()=>(2000)
    //  };
    //     // 4) Add the product if it's new
    //  else{ 
    //   }
    // 5) Update the cart display 
// }


function RemoveItem(){
  
}

function Total(){
    let total = 0
    let cartItemsCon = document.getElementsByClassName("cart-items")[0]
   let cartRows = cartItemsCon.getElementsByClassName('cart-row')
   for( let i = 0; i < cartRows.length; i++){
        let cartRows = cartRows[i]
        let priceElement = cartRows.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRows.getElementsByClassName('cart-quantity-input')
        [0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
   }
   document.getElementsByClassName("cart-total-price")[0].innerText = '$' + total
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                            
function Quantity(){

}
