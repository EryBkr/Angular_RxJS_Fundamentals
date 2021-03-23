import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { interval, of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import {  timeout,catchError, delay,retry } from "rxjs/operators";
import {ajax} from "rxjs/ajax";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {


    //Hata durumunda bizim belirleyeceğimiz sayı kadar tekrar etmesini sağlar
    ajax.getJSON("https://jsonplaceholder.typicode.com/postss/1").pipe(retry(3),catchError(err=>of("Data Geç Geliyor"))).subscribe(data => {
      console.log(data);
    });

  }

}
