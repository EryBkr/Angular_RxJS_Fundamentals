import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from './services/to-do-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //DI ile servisimi ekliyorum
  constructor(private toDoService: ToDoServiceService) {
  }


  ngOnInit(): void {
    this.getToDoList();

  }

  getToDoList() {
    //Servisten gelen dataya subscribe ile eriştik.Konsola yazdırdık
    this.toDoService.getToDoList().subscribe(data => {
      console.log(data);
    });
  }

}
