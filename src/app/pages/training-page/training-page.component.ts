import { Component, OnInit } from '@angular/core';
import {TrainingDataService} from "./trainingData.service";
import {Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";

import {forEach} from "@angular/router/src/utils/collection";
import {ToastrService} from 'ngx-toastr';
import {DeleteModalComponent} from '../../shared/modals/delete-modal/delete-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddItemModalComponent} from '../../shared/modals/add-item-modal/add-item-modal.component';

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

  constructor(private _trainingDataService: TrainingDataService,
              private toastrService: ToastrService,
              private _modalService: NgbModal) {
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

  deleteItem(trainingId: any, trainingTitle: any) {
    const modalRef = this._modalService.open(DeleteModalComponent);
    modalRef.componentInstance.id = trainingId;
    modalRef.componentInstance.name = trainingTitle;
    modalRef.componentInstance.item = 'training';
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      if(receivedEntry==='ok') {
        this._trainingDataService.deleteItem(trainingId);
        this.toastrService.show('Training successfully deleted');
      }
      modalRef.close();
    });

  }

  addItem() {
    const modalRef = this._modalService.open(AddItemModalComponent);
    modalRef.componentInstance.pageName = 'training';
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      this._trainingDataService.addItem(receivedEntry.trainingTitle, receivedEntry.trainingSkill, receivedEntry.trainingDescription);
      this.toastrService.success('Training successfully deleted');
      modalRef.close();
    });
  }

}
