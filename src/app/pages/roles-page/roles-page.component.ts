import { Component, OnInit } from '@angular/core';
import {RolesDataService} from "./rolesData.service";

@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',
  styleUrls: ['./roles-page.component.scss'],
  providers: [RolesDataService]
})
export class RolesPageComponent implements OnInit {

  rolesData: any;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  roleTitle ='';
  roleDescription:'';

  constructor(private _rolesDataService: RolesDataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.rolesData = this._rolesDataService.getData();
  }

  deleteRole(roleId: any) {
    this._rolesDataService.deleteRole(roleId);
  }

  addRole(roleTitle, roleDescription) {
    this._rolesDataService.addRole(roleTitle,roleDescription);
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
