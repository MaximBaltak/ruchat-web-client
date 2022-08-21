import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {AppState} from "../../store";
import {Store} from "@ngrx/store";
import {isMobileSelector} from "../../store/selectors/adaptive.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  isMobile$: Observable<boolean>
  constructor(private store$: Store<AppState>) {
    this.isMobile$ = this.store$.select(isMobileSelector)
  }

}
