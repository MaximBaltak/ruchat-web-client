import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {isMobileSelector} from "../../store/selectors/adaptive.selectors";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  isMobile$:Observable<boolean>;
  constructor(private store$: Store<AppState>) {
    this.isMobile$ = store$.select(isMobileSelector)
  }

}
