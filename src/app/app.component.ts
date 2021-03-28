import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currencies: string[] = ["TL", "DOLAR"];
  selectedCurrency = new FormControl("TL");


  constructor(private service:CurrencyService) {
  }

  ngOnInit(): void {
    this.selectedCurrency.valueChanges.subscribe(data=>{
      //Servisimize datayı gönderiyoruz
      this.service.setCurrency(data);
    });
  }

}
