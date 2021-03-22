import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, fromEvent, interval } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { mergeAll, map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const myEvent = fromEvent(document, "click");


    const myMerge = myEvent.pipe(map(data => interval(1000)));

    //İki farklı observable yapıyı birleştirmemizi ve eş zamanlı data yayımını sağlar
    myMerge.pipe(mergeAll()).subscribe(data => {
      console.log(data);
    });

  }

}

