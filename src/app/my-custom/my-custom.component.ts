import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-custom',
  templateUrl: './my-custom.component.html',
  styleUrls: ['./my-custom.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyCustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
