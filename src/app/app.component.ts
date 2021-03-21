import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { from } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    //C# ta ki Dictionary yapısına benzer
    const map = new Map();
    map.set(1, "Eray");
    map.set(2, "Berkay");

    //kullanımı of operatörüne benzer
    const fromValues = from(map);
    fromValues.subscribe(data => {
      console.log(data);
    });
  }

}
