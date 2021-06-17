import { ViewportScroller } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isStickyToolbar: boolean = false;
  constructor(private viewportScroller: ViewportScroller) {}
  title = 'surfbus';

  onClickScroll(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  isSticky(value) {
    this.isStickyToolbar = value;
  }
}
