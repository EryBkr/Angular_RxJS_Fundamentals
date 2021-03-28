import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private service:CurrencyService) { }
  currency:string;

  ngOnInit(): void {
    this.service.currentCurrency.subscribe(data=>{
this.currency=data;
    });
  }

}
