import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';
import {Logs} from "../../shared/models/logs";
import {BehaviorSubject} from "rxjs/index";
import {User} from "../../shared/models/user";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;
  PieOption;
  BarOption;
  logsData: any;
  pageSize = 10;
  pageNumber = 1;
  public AnimationBarOption;
  user:any;

  constructor(private _chartsService: ChartsService) {
    this.PieOption = this._chartsService.getPieOption();
    this.BarOption = this._chartsService.getBarOption();
  }

  ngOnInit() {
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
    this.logsData = new BehaviorSubject<Logs>(JSON.parse(localStorage.getItem('logs')));
    this.logsData = this.logsData.value;
    this.user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }
}
