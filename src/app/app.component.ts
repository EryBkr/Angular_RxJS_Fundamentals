import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { ajax } from "rxjs/ajax"; //Ajax için farklı bir import yolu seçmemiz gerekiyor

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    //GET isteği yapıyoruz.Zaten bildiğimiz ajax yapısı bu.
    const getData = ajax.getJSON("https://jsonplaceholder.typicode.com/posts");
    getData.subscribe(data => {
      //Ajax isteği atarak datalarımıza ulaşmış olduk
      console.table(data); //Table datayı daha düzenli görmemizi sağlayan bir js fonksiyonudur
    },
      err => { },
      () => {
        console.log("İşlem tamamdır");
      });
  }

}
