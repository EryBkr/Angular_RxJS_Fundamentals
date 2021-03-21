import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { interval, from } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import {throttleTime} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    const myArray = from([600,700,800,900,1000,2000,3000,4000,5000,6000,7000,8000,9000]);

    //Gecikmeli olarak data yayınlamamızı sağlar.İçerisine ms cinsinden değer alabilir
    myArray.pipe(throttleTime(2000)).subscribe(data => {
      console.log(data);
    });
  }

}
