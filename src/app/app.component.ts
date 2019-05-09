import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';
  inputText: string = '';
  openPopup: Function;
  @ViewChild('inputEl') inputEl;

  setPopupAction(fn: any) {
    this.openPopup = fn;
  }
}
