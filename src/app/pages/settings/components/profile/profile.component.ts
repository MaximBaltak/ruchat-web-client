import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    isShowPassword: boolean = true
  constructor(private activeRoute: Router) { }

  ngOnInit(): void {
  }
  public toggleShowPassword(): void{
   this.isShowPassword = !this.isShowPassword
}
  public back() :void{
    this.activeRoute.navigate(['user',1])
  }

}
