import { Component } from '@angular/core';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css'],
})
export class AddTasksComponent {
  todoItemsList: any = [];
  completedItemsList: any = [];
  favouriteItemsList: any = [];
  isCompletedClick: boolean = false;
  favouriteClick: boolean = false;

  ngOnInit() {
    window.scrollTo(0, 0);
    console.log(window.location.href);
    this.todoItemsList = JSON.parse(localStorage.getItem('list') || '{}');
    let Items= [
      { item: 'Read a chapter from the book you"ve been meaning to finish.', isItemCompleted: true, isItemFavourite: false },
      { item: 'Complete the coding tasks for the current sprint.', isItemCompleted: false, isItemFavourite: true },
      { item: 'Drink at least 8 glasses of water throughout the day.', isItemCompleted: false, isItemFavourite: false },
      { item: 'Clean out the garage and organize tools.', isItemCompleted: false, isItemFavourite: false },
    ];
    let defaultItems = this.todoItemsList.length >0 ?  this.todoItemsList : Items;
   
    if (window.location.href.includes('/favouritetasks')) {
      this.favouriteClick = true;
      let defaultFavouriteItems: { isItemFavourite: boolean; }[]=[];
      
      defaultItems.forEach((item: { isItemFavourite: boolean }) => {
        if (item.isItemFavourite == true) {
          defaultFavouriteItems.push(item);
        }
      });
      localStorage.setItem('favlist',JSON.stringify(defaultFavouriteItems));
      this.favouriteItemsList = JSON.parse(localStorage.getItem('favlist') || '{}' );
      console.log(this.favouriteItemsList);
    } else {
      this.favouriteClick = false;
      let defaultCompletedItems: { isItemCompleted: boolean; }[]=[];
      localStorage.setItem('list',JSON.stringify(defaultItems))
      this.todoItemsList = JSON.parse(localStorage.getItem('list') || '{}');
      this.completedItemsList = JSON.parse(localStorage.getItem('completedlist') || '[]');
      if(this.completedItemsList.length == 0){
      this.todoItemsList.forEach((item: { isItemCompleted: boolean }) => {
        if (item.isItemCompleted == true) {
          this.isCompletedClick = true;
          defaultCompletedItems.push(item);
          let index = this.todoItemsList.indexOf(item);
          if (index != -1) {
          this.todoItemsList.splice(index, 1);
          }
        }
        localStorage.setItem('completedlist',JSON.stringify(defaultCompletedItems))
      });
      localStorage.setItem('completedlist',JSON.stringify(defaultCompletedItems))
    }

     
      this.completedItemsList = JSON.parse(localStorage.getItem('completedlist') || '{}');
      this.isCompletedClick = this.completedItemsList.length>0? true:false;
      // this.todoItemsList.forEach((item: { isItemCompleted: boolean }) => {
      //   if (item.isItemCompleted == true) {
      //     this.completedItemsList.push(item);
      //   }
      // });
    }

    console.log(this.todoItemsList,this.completedItemsList,this.favouriteItemsList);
  }

  addItem(e: any) {
    if(e.length>0){
    this.todoItemsList.push({
      item: e,
      isItemCompleted: false,
      isItemFavourite: false,
    });
    localStorage.setItem('list',JSON.stringify(this.todoItemsList))
    console.log(e, this.todoItemsList);
  }
  }
  deleteItem(item: any) {
    let index = this.todoItemsList.indexOf(item);
    if (index != -1) {
      this.todoItemsList.splice(index, 1);
    }
    localStorage.setItem('list',JSON.stringify(this.todoItemsList))
    console.log(index);
  }
  completeItem(i: any) {
    this.isCompletedClick = true;
    i.isItemCompleted = !i.isItemCompleted;
    if (i.isItemCompleted == true) {
      this.completedItemsList.push(i);
      let index = this.todoItemsList.indexOf(i);
      if (index != -1) {
        this.todoItemsList.splice(index, 1);
      }
    } else {
      this.todoItemsList.push(i);
      let index = this.completedItemsList.indexOf(i);
      if (index != -1) {
        this.completedItemsList.splice(index, 1);
      }
    }
    localStorage.setItem('list',JSON.stringify(this.todoItemsList))
    localStorage.setItem('completedlist',JSON.stringify(this.completedItemsList))
    console.log(this.completedItemsList);
  }
  favItem(i: any) {
    console.log('clicked')
    i.isItemFavourite = !i.isItemFavourite;
    if (i.isItemFavourite == true) {
      this.favouriteItemsList.push(i);
      let indextodo = this.todoItemsList.indexOf(i);
      if (indextodo != -1) {
        this.todoItemsList[indextodo].isItemFavourite = true;
      }
    }
    localStorage.setItem('favlist',JSON.stringify(this.favouriteItemsList));
    localStorage.setItem('list', JSON.stringify(this.todoItemsList));
    console.log(this.favouriteItemsList);
  }
  favItemList(i: any) {
    console.log(this.todoItemsList,this.favouriteItemsList)
    i.isItemFavourite = false;

    if (i.isItemFavourite == false) {
      let index = this.favouriteItemsList.indexOf(i);
      if (index != -1) {
        this.favouriteItemsList.splice(index, 1);
      }
      let indextodo = this.todoItemsList.filter((x: { item: any; })=>x.item == i.item);
      if (indextodo) {
        indextodo[0].isItemFavourite = false;
      }
    }
    localStorage.setItem('favlist',JSON.stringify(this.favouriteItemsList));
    localStorage.setItem('list', JSON.stringify(this.todoItemsList));
  }
}
