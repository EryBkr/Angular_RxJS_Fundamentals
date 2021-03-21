import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, from, interval, timer } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { skipUntil } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const myInterval = interval(1000);

    //Zaman düzeyinde atlama sağlıyor skipUntil
    myInterval.pipe(skipUntil(timer(5000))).subscribe(data => {
      console.log(data);
    });
  }

}
