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
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  sticky: boolean = false;
  toolbarPosition: any;

  @ViewChild('stickyToolbar') stickyToolbar: ElementRef;

  @ViewChild('menuBtn', { read: MatMenuTrigger })
  protected menuBtn: MatMenuTrigger;

  @Output() isSticky = new EventEmitter<boolean>();
  @Output() elementId = new EventEmitter<string>();

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

  ngOnInit(): void {}

  onClickScroll(elementId: string) {
    this.menuBtn.closeMenu();

    this.elementId.emit(elementId);
  }

  ngAfterViewInit() {
    this.toolbarPosition = this.stickyToolbar.nativeElement.offsetTop;
  }
}
