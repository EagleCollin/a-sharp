import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  ngForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  sendInfo(form: FormGroup) {
    console.log('Submitted!', form);
  }
}
