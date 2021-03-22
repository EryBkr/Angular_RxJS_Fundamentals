import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { fromEvent, interval, of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { withLatestFrom } from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const myInterval = interval(1000);

    //Yayınlanan son datayı almamızı sağlar
    const myClick = fromEvent(document, "click").pipe(withLatestFrom(myInterval)).subscribe(data => {
      console.log(data);
    });
  }

}
