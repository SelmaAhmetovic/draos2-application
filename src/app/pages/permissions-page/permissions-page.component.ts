import { Component, OnInit } from '@angular/core';
import {PermissionsDataService} from "./permissionsData.service";
import {ToastrService} from 'ngx-toastr';

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

  constructor(private _permissionsDataService: PermissionsDataService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.permissionData = this._permissionsDataService.getData();
  }

  deleteItem(id: any) {
    this._permissionsDataService.deleteItem(id);
    this.toastrService.show('Permission successfully deleted');
  }

  addItem(permissionTitle,permissionDescription) {
    this._permissionsDataService.addItem(permissionTitle, permissionDescription);
    this.toastrService.success('Permission successfully added');
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }


}
