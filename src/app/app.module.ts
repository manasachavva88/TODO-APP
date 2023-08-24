import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTasksComponent } from '../add-tasks/add-tasks.component';
import { WelocmeTodoComponent } from '../welocme-todo/welocme-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTasksComponent,
    WelocmeTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
