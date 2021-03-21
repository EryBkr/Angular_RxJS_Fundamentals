import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, from } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { first } from "rxjs/operators" //first işlevini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    const myArray = from([5, 10, 15, 20, 50, 100, 600]);
    //pipe bir dizi observable eylemini ardışık olarak uygulayabilen bir fonksiyondur.First ise LINQ da ki firstordefault() gibi düşünülebilir
    myArray.pipe(first(val=>val===15)).subscribe(data => {
      console.log(data);
    });

  }

}
