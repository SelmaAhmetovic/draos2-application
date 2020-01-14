import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../models';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/user.png';
  userRole: any;
  user:any;
  userName: any;
  firstName: any;
  lastName: any;


  constructor() {
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.userName = this.user._value.username;
    this.firstName = this.user._value.firstName;
    this.lastName = this.user._value.lastName;
    this.userRole = this.user._value.role;
  }

  ngOnInit() {
  }

}
