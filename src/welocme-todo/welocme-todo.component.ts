import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welocme-todo',
  templateUrl: './welocme-todo.component.html',
  styleUrls: ['./welocme-todo.component.css']
})
export class WelocmeTodoComponent {
  addTasksBool:boolean=false;
   constructor(private router:Router){
    window.scrollTo(0, 0);
   }

  addTasks(){
    this.addTasksBool = true;
    this.router.navigateByUrl('/addtasks')
  }
}
