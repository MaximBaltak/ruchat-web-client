import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-email-modal',
  templateUrl: './email-modal.component.html',
  styleUrls: ['./email-modal.component.scss']
})
export class EmailModalComponent implements OnInit {
  emailForm: FormGroup = new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

}
