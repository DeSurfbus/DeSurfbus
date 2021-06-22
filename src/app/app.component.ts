import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isStickyToolbar: boolean = false;
  constructor(private viewportScroller: ViewportScroller) {}
  title = 'surfbus';

  isSticky(value) {
    this.isStickyToolbar = value;
  }

  onClickScroll(elementId: string) {
    this.viewportScroller.setOffset(() => [0, 64]);
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
