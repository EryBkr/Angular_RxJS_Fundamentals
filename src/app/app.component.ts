import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of, from } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { takeLast } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    var myArray = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    //Listenin sonundan kaç adet datanın gelmesi gerektiğini belirledik
    myArray.pipe(takeLast(3)).subscribe(data=>{
      console.log(data);
    });
  }

}
