import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTasksComponent } from 'src/add-tasks/add-tasks.component';
import { WelocmeTodoComponent } from 'src/welocme-todo/welocme-todo.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: WelocmeTodoComponent},
  {path:'addtasks',component:AddTasksComponent},
  {path:'favouritetasks',component:AddTasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
