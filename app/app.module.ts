import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AComponent, BComponent, DummyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
