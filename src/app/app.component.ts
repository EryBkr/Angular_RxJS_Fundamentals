import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { interval, of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import {throttle} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const myInterval = interval(1000);

    //Gecikmeli olarak data yayınlamamızı sağlar
    myInterval.pipe(throttle(x=>interval(2000))).subscribe(data => {
      console.log(data);
    });
  }

}
