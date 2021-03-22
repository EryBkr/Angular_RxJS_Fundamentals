import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, from } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { startWith } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const myArray = from([1, 2, 3, 4, 5, 6]);

    //Verimizin başlangıcına istediğimiz değeri eklemiş olduk
    myArray.pipe(startWith(0)).subscribe(data => {
      console.log(data);
    });
  }

}
