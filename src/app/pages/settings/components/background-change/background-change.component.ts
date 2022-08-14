import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-background-change',
  templateUrl: './background-change.component.html',
  styleUrls: ['./background-change.component.scss']
})
export class BackgroundChangeComponent implements OnInit {

  constructor(private activeRoute:Router) { }

  ngOnInit(): void {
  }
  public back() :void{
    this.activeRoute.navigate(['user',1])
  }
}
