import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import * as Immutable from 'immutable';

const formatDate = (item, pattern) => item.toString();
@Component({
  selector: 're-chart-demo',
  templateUrl: './chart-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartDemoComponent implements OnInit {


  ngOnInit(): void {
  }

}

