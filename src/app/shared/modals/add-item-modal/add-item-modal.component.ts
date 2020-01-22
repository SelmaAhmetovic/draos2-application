import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {CategoriesDataService} from '../../../pages/categories-page/categoriesData.service';
import {SkillsDataService} from '../../../pages/skills-page/skillsData.service';
import {TrainingDataService} from '../../../pages/training-page/trainingData.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss'],
  providers: [CategoriesDataService, TrainingDataService]
})
export class AddItemModalComponent {
  @Input() pageName;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  model = {
    roleTitle: '',
    roleDescription: '',
    skillCategory: '',
    skillTile: '',
    skillDescription: '',
    permissionTitle: '',
    permissionDescription: '',
    categoryTitle: '',
    categoryDescription: '',
    trainingTitle: '',
  };
  private categories: any;
  private skills: any;
  constructor(public modal: NgbActiveModal,
              private _modalService: NgbModal,
              private _categoriesDataService: CategoriesDataService,
              private _trainingDataService: TrainingDataService) {

  }

  ngOnInit() {
    this.categories = this.getCategories();
    this.skills = this.getSkills();
  }

  passBack() {
    this.passEntry.emit(this.model);
  }

  getCategories() {
    let allCategories = this._categoriesDataService.getData();
    let filteredCategories = [];
    allCategories.forEach(function (value) {
      filteredCategories.push(value.categoryTitle);
    });
    return filteredCategories;
  }

  getSkills() {
    let allSkills = this._trainingDataService.getSkills();
    let filteredSkills = [];
    allSkills.forEach(function (value) {
      filteredSkills.push(value.skillTitle);
    });
    return filteredSkills;
  }

  searchCategory = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.categories.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


  searchSkill = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.skills.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )



}

