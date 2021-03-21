import { ValueTransformer } from '@angular/compiler/src/util';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  //Html tarafında ki buttonumuza bu şekilde decarator aracılığıyla ulaşıyorum
  @ViewChild("myBtn") //Parametre olarak #myBtn referansını veriyorum
  myButton: ElementRef;



  constructor() {
  }

  //Component oluşurken çalışacak olan kısım
  ngOnInit(): void {
  }

  //View elemanları oluştuktan sonra çalışacak kısım
  ngAfterViewInit(): void {
    //ilk parametreye buttonumuzun native halini,ikinci parametreye ise event tipini verdik.Bu yapıya subscribe olup gerekli işlemleri gerçekleştireceğiz
    fromEvent(this.myButton.nativeElement, "click").subscribe(execute => {
      alert("Çalıştı");
    });
  }

}
