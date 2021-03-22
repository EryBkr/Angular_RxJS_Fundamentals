import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, from, concat } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    const numberArray = from([1, 2, 3, 4, 5, 6]);
    const stringArray = from(["a", "b", "c", "d"]);

    //Sırasıyla Observable elemanları yayınlar
    concat(numberArray, stringArray).subscribe(data=>{
      console.table(data);
    });

  }

}
