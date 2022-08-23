import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {openConfirmModalAction} from "../../store/actions/modals.actions";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isAuth: boolean = false
  isShowPassword:boolean = false
  constructor(private activeRoute: Router,private store$: Store<AppState>) {}

  ngOnInit(): void {
  }
  public toggleShowPassword() :void {
    this.isShowPassword = ! this.isShowPassword
  }

  public signIn(): void {
    this.activeRoute.navigate(['user', 1])
  }

  public signUp(): void {
    this.activeRoute.navigate(['user', 1])
  }

  public onConfirm(): void {
    this.store$.dispatch(openConfirmModalAction())
  }

  public toggleForm() {
    this.isAuth = !this.isAuth
  }
}
