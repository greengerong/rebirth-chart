import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from './chart.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    ChartComponent,
  ],
  declarations: [
    ChartComponent
  ],
  providers: [],
})
export class ChartModule {
}
