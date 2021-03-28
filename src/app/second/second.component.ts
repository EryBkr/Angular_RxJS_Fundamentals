import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private service: CurrencyService) { }
  currency: string;
  ngOnInit(): void {
    this.service.currentCurrency.subscribe(data => {
      this.currency = data;
    });
  }

}
