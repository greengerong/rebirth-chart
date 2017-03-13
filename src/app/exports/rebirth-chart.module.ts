import { NgModule, ModuleWithProviders } from '@angular/core';
import { ChartModule } from './chart';
import { RebirthChartConfig } from './rebirth-chart.config';


@NgModule({
  imports: [
    ChartModule,
  ],
  exports: [
    ChartModule,
  ],
  declarations: [],
  providers: [],
})
export class RebirthChartModule {

  static forRoot(): ModuleWithProviders {

    return {
      ngModule: RebirthChartModule,
      providers: [
        { provide: RebirthChartConfig, useClass: RebirthChartModule }
      ]
    };
  }
}
