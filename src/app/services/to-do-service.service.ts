import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { map, mergeMap, take } from "rxjs/operators";
import { from } from 'rxjs';

//ng g s [ServiceName] şeklinde servisimizi oluşturduk
@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  //DI ile http modulünü alıyorum
  constructor(private httpClient: HttpClient) { }

  getToDoList() {
    //Observable olarak dataları geriye dönüyorum,mergeMap ile bana dizi şeklinde gelecek dataları alıp map ile hangi propertylerin geleceğini belirliyorum
    return this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/todos")
    .pipe(mergeMap(data => from(data)),
     map(data => `${data.id}-${data.title}`),
     take(10));
  }
}
