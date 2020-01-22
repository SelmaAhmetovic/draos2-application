import { Component, OnInit } from '@angular/core';
import {PermissionsDataService} from "./permissionsData.service";
import {ToastrService} from 'ngx-toastr';
import {DeleteModalComponent} from '../../shared/modals/delete-modal/delete-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddItemModalComponent} from '../../shared/modals/add-item-modal/add-item-modal.component';

@Component({
  selector: 'app-permissions-page',
  templateUrl: './permissions-page.component.html',
  styleUrls: ['./permissions-page.component.scss'],
  providers: [PermissionsDataService]
})
export class PermissionsPageComponent implements OnInit {

  permissionData: any;
  pageSize = 10;
  pageNumber = 1;
  permissionTitle: string = '';
  permissionDescription: string = '';

  constructor(private _permissionsDataService: PermissionsDataService,
              private toastrService: ToastrService,
              private _modalService: NgbModal){

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.permissionData = this._permissionsDataService.getData();
  }

  deleteItem(id: any, permissionTitle) {
    const modalRef = this._modalService.open(DeleteModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.name = permissionTitle;
    modalRef.componentInstance.item = 'permission';
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      if(receivedEntry==='ok'){
        this._permissionsDataService.deleteItem(id);
        this.toastrService.show('Permission successfully deleted');
      }
      modalRef.close();
    });
  }

  addItem() {
    const modalRef = this._modalService.open(AddItemModalComponent);
    modalRef.componentInstance.pageName = 'permission';
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      this._permissionsDataService.addItem(receivedEntry.permissionTitle, receivedEntry.permissionDescription);
      this.toastrService.success('Permission successfully added');
      modalRef.close();
    });
  }


  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }


}
