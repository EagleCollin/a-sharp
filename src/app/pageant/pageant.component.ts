import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pageant',
  templateUrl: './pageant.component.html',
  styleUrls: ['./pageant.component.css'],
})
export class PageantComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
