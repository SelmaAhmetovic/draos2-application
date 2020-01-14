import { Component, OnInit } from '@angular/core';
import {UserSkillsDataService} from "./userSkillsData.service";
import { ChartsService } from '../charts/components/echarts/charts.service';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {User} from '../../shared/models';
import {TrainingManagement} from "../../shared/models/trainingManagement";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ChartsService, UserSkillsDataService]
})
export class ProfileComponent implements OnInit {
  userSkillsManagementData: any;
  pageSize = 10;
  pageNumber = 1;
  roleTitle;
  roleDescription;
  BarOptionUser;
  public model: any;
  userRole: any;
  showloading: boolean = false;

  user: any;
  userName: any;
  firstName: any;
  lastName: any;
  trainingManagement: any;

  constructor(private _userSkillsDataService: UserSkillsDataService,
              private _chartsService: ChartsService) {
    this.BarOptionUser = this._chartsService.getBarOptionUser();
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.userName = this.user._value.username;
    this.firstName = this.user._value.firstName;
    this.lastName = this.user._value.lastName;
    this.userRole = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.trainingManagement = new BehaviorSubject<TrainingManagement>(JSON.parse(localStorage.getItem('trainingManagement')));
  }

  ngOnInit() {
    this.loadData();
  }
  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  loadData() {
    /*this.userSkillsManagementData = this._userSkillsDataService.DATA;*/
    let filtered = this.trainingManagement._value;
    this.userSkillsManagementData = filtered.filter(el => el.userName === this.userName);
  }

}
