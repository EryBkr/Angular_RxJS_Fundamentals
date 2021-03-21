import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, from } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import {mapTo} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const myArray = from([1, 2, 3, 4, 5, 6, 7, 8]);

    //MapTo her bir değeri vermiş olduğumuz değer ile değiştirir ve onu data adeti kadar yazar
    myArray.pipe(mapTo("sabit değer")).subscribe(data=>{
      console.log(data);
    });
  }

}
