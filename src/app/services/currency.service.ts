import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }
  currentCurrency = new BehaviorSubject("TL");

  setCurrency(val: string) {
    //Subscribe olmuş datalar bu next metodundan etkilenecek ve yeni değerlerine sahip olacaklar
    this.currentCurrency.next(val);
  }
}
