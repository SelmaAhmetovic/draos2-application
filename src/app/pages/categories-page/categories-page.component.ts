import { Component, OnInit } from '@angular/core';
import {CategoriesDataService} from "./categoriesData.service";
import {PermissionsDataService} from '../permissions-page/permissionsData.service';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteModalComponent} from '../../shared/modals/delete-modal/delete-modal.component';
import {AddItemModalComponent} from '../../shared/modals/add-item-modal/add-item-modal.component';

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

  addItem() {
    const modalRef = this._modalService.open(AddItemModalComponent);
    modalRef.componentInstance.pageName = 'category';
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      this._categoriesDataService.addItem(receivedEntry.categoryTitle, receivedEntry.categoryDescription);
      this.toastrService.success('Category successfully added');
      modalRef.close();
    });
  }



}
