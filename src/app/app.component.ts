import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { map, reduce } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

   const myArray=of(1,2,3,5,6,7,8);


   //Sum burada örnektir.Farklı işlemler için reduce kullanabiliriz.Temp değişken mantığı vardır
   myArray.pipe(reduce((sum,val)=>sum+val)).subscribe(data=>{
     console.log(data);
   });

  }

}
