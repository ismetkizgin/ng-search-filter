# Angular Search Filter Pipe


## Install

```
npm i ng-search-filter --save
```
```
yarn add ng-search-filter 
```
## Usage

Import `NgSearchFilterModule` to your module

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';

import { NgSearchFilterModule } from 'ng-search-filter';

@NgModule({
  imports: [BrowserModule, NgSearchFilterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

And use pipe in your component after declaring and initializing it in your component:

```typescript
import { Component } from '@angular/core';

import { NgSearchFilterService } from 'ng-search-filter';

@Component({
  selector: 'example-app',
  template: `
    <div>
        <input type="text" [(ngModel)]="searchText">
        <div *ngFor = "let item of items |filter:searchText" >
          <p>
            {{item.name}}
          </p>
        </div>

    </div>  
  `
})

export class AppComponent {
  constructor(private _ngSearchFilterService: NgSearchFilterService) { }
  // The package uses Turkish as the default language support. 
  // This way you can change the language support.
  this._ngSearchFilterService.setDefaultLang('en');
  
  items: string[] = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];
  searchText = '';
}
```

## Support ng-search-filter

ng-search-filter is completely free and open-source. If you find it useful, you can show your support by 🌟 it or sharing it in your social network.


## License

[Apache](LICENSE)
