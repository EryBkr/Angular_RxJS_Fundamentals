import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { interval, of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { finalize, take } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    //İşlem tamamlandıktan sonra Execute edilecek işlemi tanımlamamızı sağlar
    interval(1000).pipe(take(5), finalize(() => console.log("İşlem Tamamlandı"))).subscribe(data => {
      console.log(data);
    });
  }

}
