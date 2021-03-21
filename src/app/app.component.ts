import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    //of operatorü içerisinde istediğimiz yapıda değişken tanımlayabiliriz.Bunların hepsini Observable olarak bize döndürür
    const ofValues = of("eray", 4, [1, 2, 3]);
    //Observable yapımızda ki datalara ulaşmak için subscribe olduk.
    ofValues.subscribe(data=>{
      //Bu şekilde her bir dataya tek tek ulaştık
      console.log(data);
    });
  }

}
