import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, fromEvent, interval, merge } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const myEvent = fromEvent(document, "click");
    const myInterval = interval(1000);

    //Merge farklı Observable yapılarını beraber yayımlayan yapıdır.
    const myMerge = merge(myEvent, myInterval).subscribe(data => {
      console.log(data);
    });
  }

}

