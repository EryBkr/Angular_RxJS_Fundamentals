import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ToDoServiceService } from './services/to-do-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //Servislerle iletişim için ekledim
  ],
  providers: [ToDoServiceService],//Servisimizi provide ediyorum ki DI ile birlikte kullanabileyimm
  bootstrap: [AppComponent]
})
export class AppModule { }
