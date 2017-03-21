import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartDemoComponent } from './chart-demo.component';
import { RebirthChartModule } from '../../exports';

@NgModule({
  imports: [CommonModule, RebirthChartModule],
  exports: [ChartDemoComponent],
  declarations: [ChartDemoComponent],
  providers: [],
  entryComponents: [ChartDemoComponent]
})
export class ChartDemoModule {
}
