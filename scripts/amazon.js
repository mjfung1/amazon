
import { products } from "/../data/products.js";
import { cart } from "/../data/cart.js";

const productGrid = document.querySelector(".js-products-grid");

let productsHTML = "";

products.forEach(product => {
    
    productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button js-add-to-cart button-primary"
                data-product-id="${product.id}"
                data-product-price="${product.priceCents}">
            Add to Cart
          </button>
        </div>
    `;

   
});

productGrid.innerHTML = productsHTML;

document.querySelectorAll(".js-add-to-cart")
    .forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.dataset.productId;

            let matchingItem;

            // Iterate through cart to see if item has been added
            cart.forEach(item => {
                if (productId === item.productId) {
                    
                    // saving object for later access
                    matchingItem = item;
                }
            });

            if (matchingItem) {
                // if item has been added, increase quantity
                matchingItem.quantity += 1;
            } else {
                cart.push({
                  productId,
                  quantity: 1,
                });
            }

            

            console.log(cart)
        })
    });

