import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-charts',
    template: `<router-outlet></router-outlet>`
})

/*@Component({
  selector: 'app-charts',
  template: `
        <ng-template>
          <router-outlet></router-outlet>
        </ng-template>
    `})*/

export class ChartsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
