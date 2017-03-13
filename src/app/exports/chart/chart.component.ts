import {
  Component, ChangeDetectionStrategy, OnDestroy, ViewChild, ElementRef, Input,
  AfterViewInit, OnChanges, SimpleChanges, Output, EventEmitter
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
export class ChartComponent implements OnChanges, AfterViewInit, OnDestroy {

  @Input() type: string;
  @Input() data: any;
  @Input() options: any;
  @Output() chartCreated = new EventEmitter<ChartComponent>();
  @Output() canvasClick = new EventEmitter<ChartComponent>();
  @ViewChild('canvas') canvas: ElementRef;
  chart: any;

  ngAfterViewInit(): void {
    this.chart = new Chart(this.canvas.nativeElement, {
      type: this.type,
      data: this.data,
      options: this.options
    });
    this.chartCreated.emit(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.chart && changes['data']) {
      const currentValue = changes['data'].currentValue;
      this.updateChartData(currentValue);
    }
  }

  onCanvasClick($event) {
    this.canvasClick.emit(this);
  }

  toBase64Image() {
    this.chart.toBase64Image();
  }

  resize() {
    this.chart.resize();
  }

  render(duration = 0, lazy = false) {
    this.chart.render(duration, lazy);
  }

  update(data: any, duration = 0, lazy = false) {
    this.updateChartData(data || {});
    this.chart.update(duration, lazy);
  }

  stop() {
    this.chart.stop();
  }

  private updateChartData(currentValue: any) {
    ['datasets', 'labels', 'xLabels', 'yLabels'].forEach(key => {
      this.chart.data[key] = currentValue[key];
    });
    this.chart.update();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
