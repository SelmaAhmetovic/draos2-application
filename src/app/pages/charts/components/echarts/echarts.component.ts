import { Component } from '@angular/core';
import { ChartsService } from './charts.service';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
  providers: [ChartsService]
})
export class EChartsComponent {
  showloading: boolean = false;
  BarOption;
  BarOptionUser;
  LineOption;
  PieOption;
  AnimationBarOption;

  constructor(private chartsService: ChartsService) {
    this.BarOption = this.chartsService.getBarOption();
    this.BarOptionUser = this.chartsService.getBarOptionUser();
    this.LineOption = this.chartsService.getLineOption();
    this.PieOption = this.chartsService.getPieOption();
    this.AnimationBarOption = this.chartsService.getAnimationBarOption();
  }
}
