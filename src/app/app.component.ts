import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { observable, Observable, of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    //create ile değişkenimize observable data yayınlamış olduk
    const myObject = Observable.create(observable => {
      observable.next("Eray");
      observable.next("Bakır");
      observable.complete();
    });

    myObject.subscribe(data => {
      console.log(data);
    });
  }

}
