import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { iif, of } from "rxjs"; //RxJS operators lerini kullanabilmek için import ettik
import { debounceTime, distinctUntilChanged, map, mergeMap } from 'rxjs/operators';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  search = new FormControl("");

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //debounceTime ile flood işleminin önüne geçiyoruz.Trim ile boşlukları silip distinctUntilChanged ile data önceki haliyle aynı ise subscribe işlemi yapılmıyor.
    //Böylece performans artışı sağlıyoruz
    this.search.valueChanges.pipe(debounceTime(500), map(value => value.trim())
      , distinctUntilChanged()
      , mergeMap(val => iif(() => val.length > 3, of(val)))//search parametresi 3 karakterden  büyük ise subsciribe olacaktır.
      , mergeMap(val=>this.userService.getUsersWithSearch(val)) //Servisimizden datayı aldık
      )
      .subscribe(data => {
        console.log(data);
      });
  }

}
