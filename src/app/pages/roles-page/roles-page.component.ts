import { Component, OnInit } from '@angular/core';
import {RolesDataService} from "./rolesData.service";
import {ToastrService} from 'ngx-toastr';

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

  constructor(private _rolesDataService: RolesDataService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.rolesData = this._rolesDataService.getData();
  }

  deleteRole(roleId: any) {
    this._rolesDataService.deleteRole(roleId);
    this.toastrService.show('Role successfully deleted');
  }

  addRole(roleTitle, roleDescription) {
    this._rolesDataService.addRole(roleTitle,roleDescription);
    this.toastrService.success('Role successfully deleted');
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
