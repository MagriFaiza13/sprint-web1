import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Product} from '../../shared/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  list = [1, 2, 3, 4, 5]
  commandList: any = [];
  total: number = 0;

  constructor() {
  }

  qte = 0

  ngOnInit(): void {
    this.commandList = JSON.parse(localStorage.getItem(environment.panel));
  }

  decrement() {
    this.qte--
  }

  increment() {
    this.qte++;

  }

  deleteOutput(id) {
    let panier: any = JSON.parse(localStorage.getItem(environment.panel));
    let index: number = -1;
    for (var i = 0; i < panier.length; i++) {
      let item: Product = JSON.parse(panier[i]);
      if (Number(item.id) == Number(id)) {
        panier.splice(i, 1);
        break;
      }
    }
    localStorage.setItem(environment.panel, JSON.stringify(panier));
    this.ngOnInit();
  }


  getTotal(event: any) {
    this.total = event;
  }
}

