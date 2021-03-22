import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { interval, of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import {  timeout,catchError, delay } from "rxjs/operators";
import {ajax} from "rxjs/ajax";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {


    //Bizim belirlediğimiz sürede data gelmez ise hata fırlatıyoruz ya da o hatayı yakalayıp konsola yazdırıyoruz
    ajax.getJSON("https://jsonplaceholder.typicode.com/posts/1").pipe(delay(2000),timeout(1000),catchError(err=>of("Data Geç Geliyor"))).subscribe(data => {
      console.log(data);
    });

  }

}
