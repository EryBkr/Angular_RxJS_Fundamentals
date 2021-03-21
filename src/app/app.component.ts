import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { timer } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subscription;

  constructor() {
    //timer fonksiyonu bir işlevin ne kadar süre sonra başlayacağına karar veren fonksiyondur
    const publisher = timer(2000);
    publisher.subscribe(
      data => {
        console.log("2 sn sonra başladım");
      },
      err => { },
      () => {
        console.log("işlemler tamamlandı");
      });


    //2 sn sonra çalış ve 1 sn de lik periyotlarla tekrar et anlamına geliyor
    const publisherV2 = timer(2000, 1000);
    this.subscription = publisherV2.subscribe(
      data => {
        console.log("2 sn sonra başladım");
      },
      err => { },
      () => {
        //1000 ms de bir tekrar edeceği için bu log yazdırılmayacaktır.Bunun için unsubscribe işlemini gerçekleştirecek bir button oluşturduk ve stop metodunu çalıştıracaktır.
        console.log("işlemler tamamlandı");
      });
  }

  //unsubscribe işlemini gerçekleştirecek metot
  stop() {
    this.subscription.unsubscribe();
  }


}
