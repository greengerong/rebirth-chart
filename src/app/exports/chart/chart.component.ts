import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

@Component({
  selector: 're-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'chart'
})
export class ChartComponent implements OnDestroy {

  ngOnDestroy(): void {
  }
}
