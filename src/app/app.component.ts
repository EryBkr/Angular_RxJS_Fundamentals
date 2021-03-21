import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { defer, of,timer } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const publisher = of(new Date());//Observable bir tarih oluşturduk,oluşturulduğu anın tarihi alırız
    const publisherDefer = defer(() => of(new Date())); //Bu yapıda ise çağırdığımız an ki tarihi alıyoruz
    const myTimer=timer(10000); //aradaki farkı görmek için timer oluşturduk

    myTimer.subscribe(ex=>{
      publisher.subscribe(val=>{
        console.log("of operators "+val);
      });
    });

    myTimer.subscribe(ex=>{
      publisherDefer.subscribe(val=>{
        console.log("defer operators "+val);
      });
    });


  }

}
