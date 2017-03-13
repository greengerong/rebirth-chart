import { Injectable, Type } from '@angular/core';
import {
  ChartDemoComponent
  // component import
} from '../../demo';

@Injectable()
export class DemoConfigService {
  gettingStarted = {
    readMe: require('!html-loader!markdown-loader!../../exports/README.md')
  };

  components: { name: string, cmp: Type<any>, directory?: string, readMe?: string, html?: string, ts?: string }[] = [
    {
      name: 'Chart',
      directory: 'chart',
      cmp: ChartDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/chart/README.md'),
      html: require('!raw-loader!../../demo/chart/chart-demo.component.html'),
      ts: require('!raw-loader!../../demo/chart/chart-demo.component.ts'),
    },
    // component declare
  ];
}
