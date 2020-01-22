import { Component, OnInit } from '@angular/core';
import {RolesDataService} from "./rolesData.service";
import {ToastrService} from 'ngx-toastr';
import {DeleteModalComponent} from '../../shared/modals/delete-modal/delete-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddItemModalComponent} from '../../shared/modals/add-item-modal/add-item-modal.component';

@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',
  styleUrls: ['./roles-page.component.scss'],
  providers: [RolesDataService]
})
export class RolesPageComponent implements OnInit {

  rolesData: any;
  pageSize = 10;
  pageNumber = 1;
  roleTitle ='';
  roleDescription:'';

  constructor(private _rolesDataService: RolesDataService,
              private toastrService: ToastrService,
              private _modalService: NgbModal) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.rolesData = this._rolesDataService.getData();
  }

  addItem() {
      const modalRef = this._modalService.open(AddItemModalComponent);
      modalRef.componentInstance.pageName = 'role';
      modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
        this._rolesDataService.addRole(receivedEntry.roleTitle,receivedEntry.roleDescription);
        this.toastrService.success('Role successfully added');
        modalRef.close();
      });
  }
  deleteRole(roleId: any, roleName) {
    const modalRef = this._modalService.open(DeleteModalComponent);
    modalRef.componentInstance.id = roleId;
    modalRef.componentInstance.name = roleName;
    modalRef.componentInstance.item = 'role';
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      if(receivedEntry==='ok') {
        this._rolesDataService.deleteRole(roleId);
        this.toastrService.show('Role successfully deleted');
      }
      modalRef.close();
    });
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
