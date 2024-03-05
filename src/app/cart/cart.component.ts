import { Component, OnInit } from '@angular/core';
import { Product, BillItem } from '../form-data.model';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCart: Product[] = [];
  billItems: BillItem[] = [];

  showCart: boolean = true;

  products: Product[] = [];

  discount: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) {
    let data = localStorage.getItem("shoppingCart");
    if (data) {
      this.shoppingCart = this.products = JSON.parse(data);
    }
  }

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
  }

  getQuantity(productId: number): number {
    const quantityInput = document.getElementById(`quantity${productId}`) as HTMLInputElement;
    const quantity = quantityInput ? +quantityInput.value : 1;
    console.log(`Quantity for product ${productId}: ${quantity}`);
    return quantity;
  }

  checkout(): void {
    this.billItems = this.shoppingCart.map(item => {
      return {
        productId: item.id,
        productName: item.name,
        quantity: item.quantity,
        name: '',
        price: item.price,
      };
    });

    const totalAmount = this.calculateTotalAmountWithDiscount();

    this.billItems = this.billItems.map(item => {
      return {
        ...item,
        discount: this.discount,
        totalAmount,
      };
    });
    this.showCart = false;
  }

  calculateTotalAmountWithDiscount(): number {
    const subtotal = this.shoppingCart.reduce((sum, item) => sum + item.price * item.quantity, 0);  // 0 is the initial value of the accumulator
    const totalAmount = subtotal - this.discount;// Apply discount
    return totalAmount;
  }
  

  ngOnInit() {
  }


}
