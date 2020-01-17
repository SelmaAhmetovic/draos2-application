import { Component, OnInit } from '@angular/core';
import {TrainingManagementDataService} from "./trainingManagementData.service";
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';


const users = ['Selma Ahmetovic', 'Adijata Vukas', 'Assistant', 'Fuad Begić', 'Professor', 'Alema Salkić',
  'Amila Japalak', 'Amila Karšić', 'Amina Spahić', 'Haris Osmanbegović'];

@Component({
  selector: 'app-skills-management-page',
  templateUrl: './training-management-page.component.html',
  styleUrls: ['./training-management-page.component.scss'],
  providers: [TrainingManagementDataService]
})
export class TrainingManagementPageComponent implements OnInit {

  trainingManagementData: any;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  currentRate: number;
  public model: any;
  users: any;

  constructor(private _trainingManagementDataService: TrainingManagementDataService, private toastrService: ToastrService) {
    this.users = this.getUsers();
  }

  ngOnInit() {
    this.currentRate = 6;
    this.trainingManagementData = this._trainingManagementDataService.getTrainings();
  }

  getUsers() {
    let allUsers = this._trainingManagementDataService.getUsers();
    let filteredUsers = [];
    allUsers.forEach(function (value) {
      filteredUsers.push(value.username);
    });
    return filteredUsers;
  }

  addTraining(userName, trainingTitle, trainingSkill) {
    this._trainingManagementDataService.addTraining(userName, trainingTitle, trainingSkill);
    this.toastrService.success('Training successfully added to user ' + userName.toString());
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.users.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
