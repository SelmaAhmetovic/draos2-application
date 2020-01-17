import { Component, OnInit } from '@angular/core';
import {TrainingDataService} from "./trainingData.service";
import {Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";

import {forEach} from "@angular/router/src/utils/collection";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-trainings-page',
  templateUrl: './training-page.component.html',
  styleUrls: ['./training-page.component.scss'],
  providers: [TrainingDataService]
})
export class TrainingPageComponent implements OnInit {

  trainingData: any;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  trainingTitle: any = '';
  trainingSkill: any = '';
  trainingDescription: any = '';
  public modelSkill: any;
  skills: any;

  constructor(private _trainingDataService: TrainingDataService, private toastrService: ToastrService) {
    this.skills = this.getSkills()
  }

  getSkills() {
    let allSkills = this._trainingDataService.getSkills();
    let filteredSkills = [];
    allSkills.forEach(function (value) {
      filteredSkills.push(value.skillTitle);
    });
    return filteredSkills;
  }

  ngOnInit() {
    this.loadData();
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  loadData() {
    this.trainingData = this._trainingDataService.getData();
  }

  deleteItem(trainingId: any) {
    this._trainingDataService.deleteItem(trainingId);
    this.toastrService.show('Training successfully deleted');
  }

  addItem(trainingTitle, trainingSkill, trainingDescription) {
    this._trainingDataService.addItem(trainingTitle, trainingSkill, trainingDescription);
    this.toastrService.success('Training successfully deleted');
  }

  searchSkill = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.skills.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
}
