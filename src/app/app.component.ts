import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, from } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const myArray = from([1, 2, 3, 4, 5, 6, 7, 8]);

    //Map her bir değere erişip onu manipüle edebilmemizi sağlar
    myArray.pipe(map(value=>value+100)).subscribe(data=>{
      console.log(data);
    });
  }

}
