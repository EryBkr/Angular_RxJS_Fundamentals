import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, from, interval } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { map, skip, take, toArray } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    //Oluşan dataları dizi içerisinde sunar
    interval(100).pipe(skip(10), take(5), toArray()).subscribe(data => {
      console.log(data);
    });

  }

}
