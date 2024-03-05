import { Injectable } from '@angular/core';
import { Product } from './form-data.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCart: Product[] = [];

  constructor() {

    const savedShoppingCart = localStorage.getItem('shoppingCart');
    if (savedShoppingCart) {
      this.shoppingCart = JSON.parse(savedShoppingCart);
    }
  }

  getShoppingCart(): Product[] {
    return this.shoppingCart;
  }

  updateShoppingCart(newShoppingCart: Product[]): void {
    this.shoppingCart = newShoppingCart;
    localStorage.setItem('shoppingCart', JSON.stringify(newShoppingCart));
  }

}

