import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('services') services: ElementRef;
  @ViewChild('parent') parent: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.services.nativeElement.addEventListener('click', () => {
      this.services.nativeElement.classList.toggle('active');
      this.parent.nativeElement
        .querySelectorAll('.parent:not(#services)')
        .forEach((ref) => {
          ref.classList.toggle('invisible');
        });
    });
  }
}
