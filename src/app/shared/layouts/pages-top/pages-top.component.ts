import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import {AuthenticationService} from "../../services/authentification.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent {
  avatarImgSrc: string = 'assets/images/user.png';
  userName: string;
  user:any;
  userPost: string = 'Musician, Player';
  currentUser: User;


  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };


  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private _globalService: GlobalService
  ) {
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.userName = this.user._value.username;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }



  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);


  }



  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
