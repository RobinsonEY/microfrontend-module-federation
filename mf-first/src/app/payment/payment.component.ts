import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export interface ICommonProduct {
  price: number;
  name: string;
}

@Component({
  standalone: true,
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  imports: [CommonModule],
})
export class PaymentComponent implements OnInit {
  constructor() {}

  products: ICommonProduct[] = [];

  ngOnInit(): void {
    console.log("asdasdas")
  }
}
