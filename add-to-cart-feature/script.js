//elements
const productsList = document.querySelector(".products-list");
const myCartProductsList = document.querySelector(".my-cart")
// console.log(productsList)
//data 
const products = [
    { id: 1, name: "Wireless Mouse", price: 799 },
    { id: 2, name: "Bluetooth Headphones", price: 1999 },
    { id: 3, name: "Laptop Stand", price: 999 },
    { id: 4, name: "USB-C Hub", price: 1499 },
    { id: 5, name: "Mechanical Keyboard", price: 3499 },
    { id: 6, name: "Webcam", price: 2299 },
    { id: 7, name: "Portable SSD", price: 4599 },
    { id: 8, name: "Gaming Chair", price: 8499 },
    { id: 9, name: "Smartwatch", price: 5299 },
    { id: 10, name: "Monitor 24-inch", price: 9999 }
  ];

  products.forEach((product)=>{
    let {id,name,price} = product;
    let productRow = `
    <div class="product">
          <div class="product-info">${name}-RS ${price}</div>
          <div class="btn" onclick="addTOCart(${id})">Add to Cart</div>
    </div>`

    productsList.insertAdjacentHTML("beforeend",productRow)
  })

const cartList = []
 //add-to-cart functions
  function addTOCart(productId){
  products.forEach((product,i)=>{
    const {id,name,price} = product;
    if(id === productId){
      const myCartRow = `
      <div class="product">
                <div class="product-info">${name}-RS ${price}</div>
                <div class="btn">Remove Item</div>
      </div>
      `
      const addedItem = products[i];
      cartList.push(addedItem)
      myCartProductsList.insertAdjacentHTML('beforeend',myCartRow)
    }

    
  })
  }
  