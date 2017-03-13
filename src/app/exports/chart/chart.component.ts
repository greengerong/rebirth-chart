import {
  Component, ChangeDetectionStrategy, OnDestroy, ViewChild, ElementRef, Input,
  AfterViewInit
} from '@angular/core';

import * as Chart from 'chart.js';

@Component({
  selector: 're-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  host: { '[style.display]': '"block"' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'chart'
})
export class ChartComponent implements AfterViewInit, OnDestroy {

  @ViewChild('canvas') canvas: ElementRef;
  chart;

  ngAfterViewInit(): void {
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
