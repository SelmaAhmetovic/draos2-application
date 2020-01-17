import { Component, OnInit } from '@angular/core';
import {SkillsDataService} from "./skillsData.service";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
  providers: [SkillsDataService]
})
export class SkillsPageComponent implements OnInit {

  skillData: any;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  skillTitle: string = '';
  skillCategory: string = '';
  skillDescription: string = '';

  constructor(private _skillsDataService: SkillsDataService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.loadData();
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  loadData() {
    this.skillData = this._skillsDataService.getData();
  }

  deleteItem(skillId: any) {
    this._skillsDataService.deleteItem(skillId);
    this.toastrService.show('Skill successfully deleted');
  }

  addItem(skillTitle, skillCategory, skillDescription) {
    this._skillsDataService.addItem(skillTitle, skillCategory, skillDescription);
    this.toastrService.success('Skill successfully added');
  }
}
