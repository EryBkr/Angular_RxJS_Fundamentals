import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { range } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    //Anlık olarak verilen değerler kadar çalışma sağlar ardından complete metodu çalışır
    const publisher = range(1, 6);
    publisher.subscribe(val => {
      console.log(val);
    },
      err => { },
      () => {
        console.log("İşlem Tamamlandı");
      });
  }

}
