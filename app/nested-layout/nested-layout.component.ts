import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-layout',
  template: `<app-layout>
  <ng-content select="app-header" ngProjectAs="app-header"></ng-content>
  <ng-content></ng-content>
  <app-footer>
    <p>Predefined Footer</p>
  </app-footer>
</app-layout>
`,
})
export class NestedLayoutComponent {}
