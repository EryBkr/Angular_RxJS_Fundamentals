import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { from } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { find } from "rxjs/operators" //find metodunu kullana bilmek için ekledik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const myArray = from([1, 2, 3, 4, 5, 6]);
    //3 ten buyuk datayı getirmesini söylüyorum, first LINQ daki first e find ise firstordefault a karşılık gelmektedir
    myArray.pipe(find(val => val > 3)).subscribe(data => {
      console.log(data);
    });
  }

}
