import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { mergeMap, map, take, filter } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }


  getUsersWithSearch(search: string) {

    //mergeMap ile dizi halinde getiriyorum,daha sonra filter ile arama yapacağım
    return this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/users")
    .pipe(mergeMap(val=>from(val)),
    filter(data=>data.name.toLowerCase().includes(search.toLowerCase()))
    ,map(val=>`${val.name} ${val.id}`)); //Kullanıcının ismini ve id sini aldık
  }
}
