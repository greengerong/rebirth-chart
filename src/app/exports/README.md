# Getting started 

> Angular2 UI plugin with Chart.js

## Welcome

Welcome to `@Rebirth/Chart`. This repo is Angular2 ui library for Chart.js. And it is being built from scratch in Typescript.

You can check [Demo Showcase](/rebirth-chart) & [API document](/rebirth-chart/compodocs/overview.html).


## Dependencies

`@Rebirth/Chart` is all base on Angular2 and Chart.js.
The only required dependencies are:

* [Angular](https://angular.io/) (requires `Angular` version 2.3.1 or higher)
* [chart.js](http://www.chartjs.org/) (`chart.js` 2.5.0)



## Installation

After installing the above dependencies, install `@Rebirth/UI` via: 
  
    npm install --save rebirth-chart
  
Once installed you need to import our main module.

    import { RebirthChartModule } from 'rebirth-chart';
  
Then use `RebirthUIModule` to declare on your feature module:


    @NgModule({
      imports: [CommonModule, FormsModule, RebirthChartModule],
      exports: [DemoComponent],
      declarations: [DemoComponent],
      providers: [],
    })
    export class DemoModule {
    }

## FAQ

* You can choose `@types/chartjs` for improve your `TypeScript` code.

* Please check [github](https://github.com/greengerong/rebirth-chart/issues) issue for your common problems / solutions.
