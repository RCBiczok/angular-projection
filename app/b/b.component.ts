import { Component, OnInit, ContentChild } from '@angular/core';
import {DummyComponent} from '../dummy/dummy.component';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  @ContentChild(DummyComponent) contentchild;

  constructor() { }

  ngOnInit() {
  }

}