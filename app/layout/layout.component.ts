import {
  Component,
  OnInit,
  Input,
  ContentChild,
  AfterViewInit,
} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  template: `<div>
  <div *ngIf="header" style="border-style: dotted;">
    <h2>Header:{{ header.title }}</h2>
    <ng-content select="app-header"></ng-content>
  </div>
  <div>
    <h2>Content</h2>
    <ng-content></ng-content>
  </div>
  <p>End of Content</p>
  <div *ngIf="footer" style="border-style: dashed;">
    <h2>Footer</h2>
    <ng-content select="app-footer"></ng-content>
  </div>
</div>`,
})
export class LayoutComponent implements AfterViewInit {
  @ContentChild(HeaderComponent)
  public header?: HeaderComponent;

  @ContentChild(FooterComponent)
  public footer?: FooterComponent;

  public ngAfterViewInit(): void {
    console.log('Injected', this.header, this.footer);
  }
}
