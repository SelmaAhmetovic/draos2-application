import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { menuService } from '../../services/menu.service';
import { GlobalService } from '../../services/global.service';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../models';
import {SecurityManagementDataService} from "../../../pages/security-management-page/securityManagementData.service";
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [menuService, SecurityManagementDataService]
})
export class SidebarComponent implements OnInit {

  public menuInfo: Array<any> = [];
  public sidebarToggle = false;
  public curentUser: any;
  public initMenu: any;
  public roleIds: any;
  public isMobile = false;

  constructor(private _menuService: menuService,
    public _globalService: GlobalService, private _securityManagementDataService: SecurityManagementDataService) {
    this.curentUser = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.isMobile = window.navigator.userAgent.includes('Mobi');
  }

  ngOnInit() {
    console.log(this.curentUser);
    this.menuInfo = this.initMenu;
    this.roleIds = this._securityManagementDataService.getRolesByUser(this.curentUser._value.username);
    this.menuInfo = new Array(JSON.parse(localStorage.getItem('menuInit')))[0];

    if(this.roleIds.indexOf('2') < 0 && this.roleIds.indexOf('3')<0) {
      for (var i =0; i < this.menuInfo.length; i++)
        if (this.menuInfo[i].path == "security-management-page" || this.menuInfo[i].path == "roles-page" || this.menuInfo[i].path == "permissions-page") {
          {
            this.menuInfo.splice(i, 1);
            i--;
          }
        }
      //this.menuInfo.filter((function(el) { return ( el.path != "security-management-page" && el.path != "roles-page" && el.path != "permissions-page"); }));
    } 
    if(this.roleIds.indexOf('2') < 0 && this.roleIds.indexOf('4')<0) {      
      for (var i =0; i < this.menuInfo.length; i++)
        if (this.menuInfo[i].path == "skills-page" || this.menuInfo[i].path == "categories-page" || this.menuInfo[i].path == "skills-management-page" || this.menuInfo[i].path  == "training-management-page" || this.menuInfo[i].path  == "training-page") {
          {
            this.menuInfo.splice(i, 1);
            i--;
          }
        }
      //this.menuInfo.filter((function(el) { return ( el.path != "skills-page" && el.path != "categories-page" && el.path != "skills-management-page" && el.path != "training-management-page"); }));
    } 
    this._sidebarToggle(false);
    this._menuService.selectItem(this.menuInfo);
    this._isSelectItem(this.menuInfo);
  }

  public _sidebarToggle(data) {
    if(data===true && this.isMobile) {
      this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);
    }
    if(data===false) {
      this._globalService.data$.subscribe(data => {
        if (data.ev === 'sidebarToggle') {
          this.sidebarToggle = data.value;
        }
      }, error => {
        console.log('Error: ' + error);
      });
    }

  }


  _isSelectItem(item) {
    for (const i in item) {
      if (item[i].children) {
        for (const index in item[i].children) {
          if (item[i].children[index].isActive || item[i].children[index].toggle === 'on') {
            item[i].toggle = 'on';
            break;
          } else {
            this._isSelectItem(item[i].children);
          }
        }
      }
    }
  }

}
