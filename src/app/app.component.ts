import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { interval } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    //1 sn de bir çalışacak bir yapı oluşturduk.Aşağıda ki ornekte subscribe metodunun alabileceği parametleri ele aldık
    //çalışması durumunda , hata almamız durumunda ve iletişimin tamamlandığı durumları ele aldık
    //metodumuz 1 sn de bir çalışacağı için complete kısmı hiçbir şekilde çalışmayacaktır
    const publisher = interval(1000);
    publisher.subscribe(val => {
      console.log("Eray " + val)
    },
      err => {
        //Hata alırsak çalışacak
        console.log(err);
      },
      () => {
        console.log("İşlem tamamlandı");
      });
  }

}
