import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sweet16',
  templateUrl: './sweet16.component.html',
  styleUrls: ['./sweet16.component.css'],
})
export class Sweet16Component implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  goHome() {
    this.router.navigate(['welcome']);
  }
}
