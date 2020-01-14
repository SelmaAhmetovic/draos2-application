import { Component, OnInit } from '@angular/core';
import {PermissionsDataService} from "./permissionsData.service";

@Component({
  selector: 'app-permissions-page',
  templateUrl: './permissions-page.component.html',
  styleUrls: ['./permissions-page.component.scss'],
  providers: [PermissionsDataService]
})
export class PermissionsPageComponent implements OnInit {

  permissionData: any;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  permissionTitle: string = '';
  permissionDescription: string = '';

  constructor(private _permissionsDataService: PermissionsDataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.permissionData = this._permissionsDataService.getData();
  }

  deleteItem(id: any) {
    this._permissionsDataService.deleteItem(id);
  }

  addItem(permissionTitle,permissionDescription) {
    this._permissionsDataService.addItem(permissionTitle, permissionDescription);
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }


}
