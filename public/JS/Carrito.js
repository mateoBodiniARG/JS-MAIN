let todoElContenidoDelCarrito = document.querySelector(".shopContent");

// FUNCTIONS
loadEventListeners();
function loadEventListeners() {
  todoElContenidoDelCarrito.addEventListener("click", addProduct);
}

function addProduct(e) {
  e.preventDefault();
  if (e.target.classList.contains("addCartProd")) {
    
      const selectProduct = e.target.parentElement;
      readTheContent(selectProduct);
     //console.log(e.target.parentElement);              
  }
}

function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('.imagenProducto [src]'),
        title: product.querySelector('.titulo[textContent]'),
        price: product.querySelector('.priceProd [textContent]'),
        id: product.querySelector('span').getAttribute('data-id'),
        amount: 1
    } 
    console.log(infoProduct)
} 

