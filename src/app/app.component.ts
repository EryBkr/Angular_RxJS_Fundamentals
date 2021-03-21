import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, from } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { switchMap, delay, map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const myArray = from([1, 2, 3, 4, 5, 6, 7, 8]);
    const otherOf = of("a", "b", "c", "d");

    //iki farklı observable yapının datalarını birleştirmemizi sağlıyor.En son gelen data grubunu yayınlıyor
    otherOf.pipe(switchMap(value => myArray.pipe(delay(2000), map(number => value + number)))).subscribe(data=>{
      console.log(data);
    });
  }

}
