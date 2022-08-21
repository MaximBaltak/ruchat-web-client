import { Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "./store";
import {changeWindowAction} from "./store/actions/adaptive.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private store$: Store<AppState>) {}
  ngOnInit(): void {
    setInterval(()=>{
        this.store$.dispatch(changeWindowAction())
    },100)
  }
}
