import { Component, OnInit } from '@angular/core';
import {SecurityManagementDataService} from "./securityManagementData.service";
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {RolesDataService} from '../roles-page/rolesData.service';
import {PermissionsDataService} from '../permissions-page/permissionsData.service';
import {forEach} from "@angular/router/src/utils/collection";
import {UserService} from '../../shared/services';
import {SkillsManagementDataService} from '../skills-management-page/skillsManagementData.service';


const users = ['Selma Ahmetovic', 'Adijata Vukas', 'Assistant', 'Fuad Begić', 'Professor', 'Alema Salkić',
  'Amila Japalak', 'Amila Karšić', 'Amina Spahić', 'Haris Osmanbegović'];

@Component({
  selector: 'app-security-management-page',
  templateUrl: './security-management-page.component.html',
  styleUrls: ['./security-management-page.component.scss'],
  providers: [SecurityManagementDataService,
              SkillsManagementDataService,
              PermissionsDataService,
              RolesDataService]
})
export class SecurityManagementPageComponent implements OnInit {

  securityManagementData: any;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  default = false;
  public model: any;
  users: any;
  rolesData: any;
  permissionData: any;
  user: any;
  roleIds: any;

  constructor(private _securityManagementDataService: SecurityManagementDataService,
              private _skillsManagementDataService: SkillsManagementDataService,
              private _permissionsDataService: PermissionsDataService,
              private _rolesDataService: RolesDataService) {

  }

  ngOnInit() {
    this.loadData();
  }
  filterDataTable(user: any) {
    //this.skillsManagementData = this._skillsManagementDataService.filterDataTable(user);
  }

  loadData() {
    //this.securityManagementData = this._securityManagementDataService.DATA;
    this.users = this.getUsers();
    this.rolesData = this._rolesDataService.getData();
    this.permissionData = this._permissionsDataService.getData();
  }

  getUsers() {
    let allUsers = this._skillsManagementDataService.getData();
    let filteredUsers = [];
    allUsers.forEach(function (value) {
      filteredUsers.push(value.username);
    });
    return filteredUsers;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.users.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

    assigned(role){
      if(role.ischecked){
        this._securityManagementDataService.addRoleToUser(this.user, role.id);
      }
      else{
        this._securityManagementDataService.removeRoleFromUser(this.user, role.id);        
      }
    }

    loadRoles(){
      this.roleIds = this._securityManagementDataService.getRolesByUser(this.user);
      this.rolesData.forEach(role => {
        if(this.roleIds.indexOf(role.id)>=0){
          role.ischecked = true; 
        } else {
            role.ischecked = false;
        }       
      });
    }

}
