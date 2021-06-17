import { ViewportScroller } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  sticky: boolean = false;
  toolbarPosition: any;

  @ViewChild('stickyToolbar') stickyToolbar: ElementRef;
  @Output() isSticky = new EventEmitter<boolean>();

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.toolbarPosition) {
      this.isSticky.emit(true);
      this.sticky = true;
    } else {
      this.isSticky.emit(false);
      this.sticky = false;
    }
  }
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {}

  onClickScroll(elementId: string) {
    this.viewportScroller.setOffset(() => [0, 64]);
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngAfterViewInit() {
    this.toolbarPosition = this.stickyToolbar.nativeElement.offsetTop;
  }
}
