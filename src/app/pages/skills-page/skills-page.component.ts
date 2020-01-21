import { Component, OnInit } from '@angular/core';
import {SkillsDataService} from "./skillsData.service";
import {ToastrService} from 'ngx-toastr';
import {DeleteModalComponent} from '../../shared/modals/delete-modal/delete-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {CategoriesDataService} from '../categories-page/categoriesData.service';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
  providers: [SkillsDataService, CategoriesDataService]
})
export class SkillsPageComponent implements OnInit {

  skillData: any;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  skillTitle: string = '';
  public skillCategory: string = '';
  skillDescription: string = '';
  private categories: any;

  constructor(private _skillsDataService: SkillsDataService,
              private _categoriesDataService: CategoriesDataService,
              private toastrService: ToastrService,
              private _modalService: NgbModal) {

    this.categories = this.getCategories();
  }
  getCategories() {
    let allCategories = this._categoriesDataService.getData();
    let filteredCategories = [];
    allCategories.forEach(function (value) {
      filteredCategories.push(value.categoryTitle);
    });
    return filteredCategories;
  }

  ngOnInit() {
    this.loadData();
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  loadData() {
    this.skillData = this._skillsDataService.getData();
  }

  deleteItem(skillId: any, skillName) {
    const modalRef = this._modalService.open(DeleteModalComponent);
    modalRef.componentInstance.id = skillId;
    modalRef.componentInstance.name = skillName;
    modalRef.componentInstance.item = 'skill';
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      if(receivedEntry==='ok'){
        this._skillsDataService.deleteItem(skillId);
        this.toastrService.show('Skill successfully deleted');
      }
      modalRef.close();
    });
  }

  addItem(skillTitle, skillCategory, skillDescription) {
    this._skillsDataService.addItem(skillTitle, skillCategory, skillDescription);
    this.toastrService.success('Skill successfully added');
    this.skillTitle = '';
    this.skillCategory = '';
    this.skillDescription = '';
  }

  searchCategory = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.categories.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
}
