import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    //İlk data new lenince verilmelidir
    const mySubject = new BehaviorSubject("Birinci Değer");

    mySubject.subscribe(data=>{
      console.log(data);
    });

    mySubject.subscribe(data=>{
      console.log(data);
    });

    //Async Subject gibi subscribe olduktan sonra değer tanımlıyoruz.Her iki nesnemiz data yayınlama işlemini gerçekleştiriyor
    mySubject.next("İkinci Değer");

  }

}
