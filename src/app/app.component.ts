import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';

  ngOnInit(){
    window.scrollTo(0, 0);
    // if(window.location.href.includes('/favouritetasks') || window.location.href.includes('/addtasks')){
    //   this.addTasksBool = true;
    // }
  }

  // tasks(){
  //   this.addTasksBool = true;
  // }
}
