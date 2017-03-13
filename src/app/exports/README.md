# Getting started 

> Angular2 UI plugin with bootstrap

## Welcome

Welcome to `@Rebirth/Chart`. This repo is Angular2 ui library for Bootstrap. And it is being built from scratch in Typescript.

You can check [Demo Showcase](/rebirth-chart) & [API document](/rebirth-chart/compodocs/overview.html).


## Dependencies

`@Rebirth/Chart` is all base on Angular2 and Bootstrap css. It no dependency on jQuery or Bootstrap's JavaScript is required.
The only required dependencies are:

* [Angular](https://angular.io/) (requires `Angular` version 2.3.1 or higher)
* [Bootstrap CSS](http://getbootstrap.com/) (`bootstrap-sass` 3.3.7)



## Installation

After installing the above dependencies, install `@Rebirth/UI` via: 
  
    npm install --save rebirth-chart
  
Once installed you need to import our main module.

    import { RebirthChartModule } from 'rebirth-chart';
  
Then use `RebirthUIModule.forRoot()` to declare on your root module:

    
    @NgModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        BrowserModule,
        RebirthChartModule.forRoot(),
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {
    }


And use `RebirthChartModule` to declare on your feature module:

    @NgModule({
      imports: [CommonModule, FormsModule, RebirthChartModule],
      exports: [DemoComponent],
      declarations: [DemoComponent],
      providers: [],
    })
    export class DemoModule {
    }

## FAQ

Please check [github](https://github.com/greengerong/rebirth-chart/issues) issue for your common problems / solutions.
