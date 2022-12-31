import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<ng-content></ng-content>',
})
export class HeaderComponent {
  @Input()
  public title: string;
}
