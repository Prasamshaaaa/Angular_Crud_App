import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product,  BillItem } from '../form-data.model';


// Now you can use BillItem in this file


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shoppingCart: Product[] = [];
  billItems: BillItem[] = [];

  products: Product[] = [
    {
      id: 1,
      name: 'Pretty Black Dress',
      description: 'Long Black frock with white strip on it. You will look so beautiful in it!!',
      price: 19.99,
      imageUrl: 'assets/images/1.jpg',
    },
    {
      id: 2,
      name: 'Pink Dress',
      description: 'Your daughter will look so beautiful wearing it!!',
      price: 55.65,
      imageUrl: 'assets/images/2.jpg'
    },
    {
      id: 3,
      name: 'High Heels',
      description: 'Black high heels. Very comfortable to walk!',
      price: 25.99,
      imageUrl: 'assets/images/6.jpg'
    },
  ];

  constructor() { }

  addToCart(product: Product, quantity: number): void {
    const existingItemIndex = this.shoppingCart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {  //item already exists
      this.shoppingCart[existingItemIndex].quantity += quantity;
      console.log(`Quantity updated for product ${product.name} in the cart. New quantity: ${this.shoppingCart[existingItemIndex].quantity}`);
      alert(`Quantity updated for product ${product.name} in the cart. New quantity: ${this.shoppingCart[existingItemIndex].quantity}`);
    } else {
      const newItem = { ...product, quantity };
      this.shoppingCart.push(newItem);
      console.log(`Product added to cart: ${product.name}, Quantity: ${quantity}`);
      alert(`Product added to the cart: ${product.name}, Quantity: ${quantity}`);
    }
    this.saveShoppingCartToLocal();
  }

  private saveShoppingCartToLocal():void {
    localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));

  }

  getQuantity(productId: number): number {
    const quantityInput = document.getElementById(`quantity${productId}`) as HTMLInputElement;
    const quantity = quantityInput ? +quantityInput.value : 1;
    console.log(`Quantity for product ${productId}: ${quantity}`);
    return quantity;
  }


  // Bill(): void {
  //   this.billItems = this.shoppingCart.map(item => ({
  //     name: item.name,
  //     price: item.price,
  //     quantity: item.quantity,
  //   }));

  //   console.log('Bill items in ShopComponent:', this.billItems);
  //      this.saveShoppingCartToLocal();

// }
ngOnInit() {
  const savedShoppingCart = localStorage.getItem('shoppingCart');
  if (savedShoppingCart) {
    this.shoppingCart = JSON.parse(savedShoppingCart);
  }
}

}
