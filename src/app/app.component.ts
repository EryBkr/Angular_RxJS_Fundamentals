import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    //Akışı bozmadan dataları kullanmamızı sağlayan operators
    of(1, 2, 3, 4, 5).pipe(tap(val=>console.log("Loglanan Data: "+val))).subscribe(data => {
      console.log(data);
    });
  }

}
