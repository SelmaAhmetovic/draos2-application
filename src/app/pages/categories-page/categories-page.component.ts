import { Component, OnInit } from '@angular/core';
import {CategoriesDataService} from "./categoriesData.service";
import {PermissionsDataService} from '../permissions-page/permissionsData.service';

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

  constructor(private _categoriesDataService: CategoriesDataService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.categoryData = this._categoriesDataService.getData();
  }


  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  deleteItem(id: any) {
    this._categoriesDataService.deleteItem(id);
  }

  addItem(permissionTitle,permissionDescription) {
    this._categoriesDataService.addItem(permissionTitle, permissionDescription);
  }



}
