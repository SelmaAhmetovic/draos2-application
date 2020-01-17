import { Component, OnInit } from '@angular/core';
import {SkillsManagementDataService} from "./skillsManagementData.service";
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {forEach} from "@angular/router/src/utils/collection";
import {ToastrService} from 'ngx-toastr';


/*const users = ['Selma Ahmetovic', 'Adijata Vukas', 'Assistant', 'Fuad Begić', 'Professor', 'Alema Salkić',
  'Amila Japalak', 'Amila Karšić', 'Amina Spahić', 'Haris Osmanbegović'];*/

@Component({
  selector: 'app-skills-management-page',
  templateUrl: './skills-management-page.component.html',
  styleUrls: ['./skills-management-page.component.scss'],
  providers: [SkillsManagementDataService]
})
export class SkillsManagementPageComponent implements OnInit {

  skillsManagementData: any;
  users: any;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  public model: any;
  public modelSkill: any;
  private skills: any;

  constructor(private _skillsManagementDataService: SkillsManagementDataService, private toastrService: ToastrService) {
    this.users = this.getUsers();
    this.skills = this.getSkills();
  }

  ngOnInit() {
  }

  getSkills() {
    let allSkills = this._skillsManagementDataService.getSkills();
    let filteredSkills = [];
    allSkills.forEach(function (value) {
      filteredSkills.push(value.skillTitle);
    });
    return filteredSkills;
  }

  getUsers() {
    let allUsers = this._skillsManagementDataService.getData();
    let filteredUsers = [];
    allUsers.forEach(function (value) {
      filteredUsers.push(value.username);
    });
    return filteredUsers;
  }

  addSkill(user: any, skill: any) {
    this.skillsManagementData = this._skillsManagementDataService.addSkill(user,skill);
    this.filterDataTable(user);
    this.toastrService.success('Skill successfully added to user ' + user.toString());
  }

  filterDataTable(user: any) {
    this.skillsManagementData = this._skillsManagementDataService.filterDataTable(user);
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

  searchSkill = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.skills.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
