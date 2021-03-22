import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { forkJoin, of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { ajax } from "rxjs/ajax";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    //Her iki istek bittiği zaman birlikte datayı yayınlar,Herhangi bir property e ulaşmak istersek diye any olarak cast ettik
    forkJoin({

      first: ajax.getJSON<any>("https://jsonplaceholder.typicode.com/albums"),
      second: ajax.getJSON<any>("https://jsonplaceholder.typicode.com/posts")

    }).subscribe(data => {
      console.log(data);
    });
  }

}
