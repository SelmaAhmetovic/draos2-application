import { Component, OnInit } from '@angular/core';
import {CategoriesDataService} from "./categoriesData.service";
import {PermissionsDataService} from '../permissions-page/permissionsData.service';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteModalComponent} from '../../shared/modals/delete-modal/delete-modal.component';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
  providers: [CategoriesDataService]
})
export class CategoriesPageComponent implements OnInit {

  categoryData: any;
  categoryTitle: string = '';
  categoryDescription: string = '';
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _categoriesDataService: CategoriesDataService,
              private toastrService: ToastrService,
              private _modalService: NgbModal) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.categoryData = this._categoriesDataService.getData();
  }


  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  deleteItem(id: any, categoryTitle) {
    const modalRef = this._modalService.open(DeleteModalComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.name = categoryTitle;
    modalRef.componentInstance.item = 'category';
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      if(receivedEntry==='ok'){
        this._categoriesDataService.deleteItem(id);
        this.toastrService.show('Category successfully deleted');
      }
      modalRef.close();
    });

  }

  addItem(permissionTitle,permissionDescription) {
    this._categoriesDataService.addItem(permissionTitle, permissionDescription);
    this.toastrService.success('Category successfully added');
    this.categoryTitle = '';
    this.categoryDescription = '';
  }



}
