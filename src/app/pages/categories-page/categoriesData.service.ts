import { Injectable } from '@angular/core';
import {Category, Permission} from '../../shared/models';
import {BehaviorSubject} from 'rxjs';
import {Logs} from "../../shared/models/logs";
import {User} from "../../shared/models/user";

@Injectable()
export class CategoriesDataService {
  categories: any;
  logs: any;
  user; any;
  constructor() {
    this.categories = new BehaviorSubject<Category>(JSON.parse(localStorage.getItem('categories')));
    this.logs = new BehaviorSubject<Logs>(JSON.parse(localStorage.getItem('logs')));
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

  }
  getData() {
    return this.categories._value;
  }

  deleteItem(id) {
    for (let i = 0; i < this.categories._value.length; i++) {
      let role = this.categories._value[i];
      if (parseInt(this.categories._value[i].id) === id) {
        // delete skill
        const log = new Logs();
        log.id = this.logs._value.length + 1;
        log.username = this.user.value.username;
        log.log = "DELETED CATEGORY"+ JSON.stringify(this.categories._value[i]);
        let dateTime = new Date();
        log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
        this.logs._value.push(log);
        localStorage.setItem('logs', JSON.stringify(this.logs._value));


        this.categories._value.splice(i, 1);
        localStorage.setItem('categories', JSON.stringify(this.categories._value));
        break;
      }
    }
  }

  addItem(categoryTitle: string, categoryDescription: string) {
    const newCategory = new Category();
    newCategory.id = this.categories._value.length + 1;
    newCategory.categoryTitle = categoryTitle;
    newCategory.categoryDescription = categoryDescription;
    this.categories._value.push(newCategory);

    const log = new Logs();
    log.id = this.logs._value.length + 1;
    log.username = this.user.value.username;
    log.log = "ADDED CATEGORY"+ JSON.stringify(newCategory);
    let dateTime = new Date();
    log.dateAndTime = dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString();
    this.logs._value.push(log);
    localStorage.setItem('logs', JSON.stringify(this.logs._value));

    localStorage.setItem('categories', JSON.stringify(this.categories._value));
  }


}
