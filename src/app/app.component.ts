import { ValueTransformer } from '@angular/compiler/src/util';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { of, fromEvent } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import {debounceTime} from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {


  //HTML Tarafında ki textbox umuza TS tarafında ulaşmış olduk
  @ViewChild("mySearch")
  myTextBox: ElementRef;

  constructor() {
  }


  ngAfterViewInit(): void {
    //Yapılan aramanın Delay lı olması için kullanıyoruz.Flood kavramının önüne geçmiş oluyoruz
    fromEvent(this.myTextBox.nativeElement, "keyup").pipe(debounceTime(2000)).subscribe(data=>{
      console.log(data["target"].value);
    });
  }

}
