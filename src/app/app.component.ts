import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { ReplaySubject } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    //İlk parametrede sondan itibaren kaç datanın gösterileceğini belirliyoruz
    const mySubject = new ReplaySubject(3);


    //Datalarımızı tanımlıyoruz
    mySubject.next(1);
    mySubject.next(2);
    mySubject.next(3);
    mySubject.next(4);
    mySubject.next(5);

    mySubject.subscribe(data=>{
      console.log(data);
    });

    mySubject.subscribe(data=>{
      console.log(data);
    });


  }

}
