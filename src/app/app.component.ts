import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { AsyncSubject } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    //Generic olarakta kullanılabilir
    const mySubject = new AsyncSubject();

    mySubject.subscribe(data=>{
      console.log("1. "+data);
    });

    mySubject.subscribe(data=>{
      console.log("2. "+data);
    });



    mySubject.next(Math.random());
    //Dataların alınabilmesi için Complete metodunun çalışması gerekiyor
    mySubject.complete();

  }

}
