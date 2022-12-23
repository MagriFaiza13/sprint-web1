import { Component, OnInit } from '@angular/core';
import {CartsService} from '../../services/carts.service';
import {Panier} from '../../shared/models/panier';

@Component({
  selector: 'app-paniers',
  templateUrl: './paniers.component.html',
  styleUrls: ['./paniers.component.css']
})
export class PaniersComponent implements OnInit {
pan!: Panier
  constructor(private CartsService:CartsService) { }

  ngOnInit(): void {
  }

}
