import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {typeForm} from "./types";
import {openConfirmModalAction} from "../../store/actions/modals.actions";
import {AppState} from "../../store";
import {Store} from "@ngrx/store";
import {toggleTypeFormAction} from "../../store/actions/users.actions";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() typeForm:typeForm|null = typeForm.REGISTRATION
  currentAvatar:any = null
  isShowPassword:boolean = false
  registrationForm: FormGroup = new FormGroup({
    file: new FormControl('', Validators.required),
    userName: new FormControl('', [Validators.required, Validators.pattern(/\D/ig)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.pattern(/\w+\d+/g),
      Validators.required
    ])
  })
  authForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.pattern(/\w+\d/g),
      Validators.required
    ])
  })
  constructor(private activeRoute:Router,private store$:Store<AppState>) { }

  ngOnInit(): void {
  }
  public changeFile(e: any): void {
    const file: Blob = e.target.files[0]
    const reader: FileReader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.currentAvatar = reader.result
    }
  }
  public signUp(): void {
    this.activeRoute.navigate(['user', 1])
  }
  public toggleShowPassword(): void {
    this.isShowPassword = !this.isShowPassword
  }
  public toggleForm(type:typeForm|string) {
    const value: typeForm = type as typeForm
    this.store$.dispatch(toggleTypeFormAction({typeForm: value}))
  }
  public back() {
    this.activeRoute.navigate(['user', 1])
  }
  public signIn(): void {
    this.activeRoute.navigate(['user', 1])
  }

  public onConfirm(): void {
    this.store$.dispatch(openConfirmModalAction())
  }
}
