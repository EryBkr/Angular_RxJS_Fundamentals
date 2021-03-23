import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { interval, of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { timeout, catchError, delay, retryWhen, map, tap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {


    //Pipe içerisinden cathError ile hatayı alabiliriz.Döndüğümüz değer subscribe içerisine normal data olarak gidecektir
    const myData = ajax.getJSON("https://jsonplaceholder.typicode.com/postss").pipe(catchError(err=>of("Pipe İçerisindeki Hata")));

    //Subscripe parametresi içerisinden hatayı alabiliriz
    myData.subscribe(data => { console.log(data) }, err => { console.log("Subscribe içerisinde ki hata") });


  }

}
