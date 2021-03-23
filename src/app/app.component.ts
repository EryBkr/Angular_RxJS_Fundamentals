import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { observable, Observable, of, Subject } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {


    const myObservable = Observable.create(observer => {
      observer.next(Math.random())
    });

    //Her iki datanın da farklı değerleri olacak.Her ikisinin de aynı data yı almasını istiyorsak Subject kullanmamız gerekiyor
    myObservable.subscribe(data=>{
      console.log("1. "+data);
    });

    myObservable.subscribe(data=>{
      console.log("2. "+data);
    });



    //Subject yapısında subscribe olduktan sonra next metodu çağrılır.Her ikie data da aynı değere sahiptir..
    const mySubject = new Subject();

    mySubject.subscribe(data=>{
      console.log("1. "+data);
    });

    mySubject.subscribe(data=>{
      console.log("2. "+data);
    });

    mySubject.next(Math.random());


  }

}
