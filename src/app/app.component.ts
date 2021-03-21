import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { from } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { last } from "rxjs/operators"; //last için ekledik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const myArray = from([1, 2, 3, 4, 5, 6]);
    //3 ten büyük son elemanı getirdik
    myArray.pipe(last(i => i > 3)).subscribe(data => {
      console.log(data);
    });
  }

}
