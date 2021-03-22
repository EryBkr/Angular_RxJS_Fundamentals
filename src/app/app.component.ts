import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, fromEvent } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { delayWhen } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    //Ben tıklayana kadar datanın akışını başlatmıyor
    ajax.getJSON("https://jsonplaceholder.typicode.com/posts/1").pipe(delayWhen(val => fromEvent(document, "click"))).subscribe(data => {
      console.table(data);
    });
  }

}
