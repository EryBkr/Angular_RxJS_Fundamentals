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

    const myInterval = interval(1000);
    myInterval.pipe(map(value => {

      if (value > 6) {
        throw "Hata Var";
      }
      else {
        return value;
      }

    }), retryWhen(err => err.pipe(tap(x => console.log(x))))).subscribe(data => {
      console.log(data);
    }, err => { console.log(err) });



  }

}
