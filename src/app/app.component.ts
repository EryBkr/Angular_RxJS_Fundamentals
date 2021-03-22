import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { interval, of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import {  repeat } from "rxjs/operators";
import {ajax} from "rxjs/ajax";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    //İşlemin tekrar sayısını belirtir
    ajax.getJSON("https://jsonplaceholder.typicode.com/posts/1").pipe(repeat(5)).subscribe(data => {
      console.log(data);
    });
  }

}
