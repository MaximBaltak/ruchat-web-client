import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isOpen: boolean = false
  isAuth: boolean = false

  constructor(private activeRoute: Router) {

  }

  ngOnInit(): void {
  }

  public signIn(): void {
    this.activeRoute.navigate(['user', 1])
  }

  public signUp(): void {
    this.activeRoute.navigate(['user', 1])
  }

  public onConfirm(): void {
  }

  public toggleForm() {
    this.isAuth = !this.isAuth
  }
}
