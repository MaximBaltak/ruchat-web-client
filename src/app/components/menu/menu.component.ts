import {Component, Input} from '@angular/core';
import {AppState} from "../../store";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {isDekstopSelector} from "../../store/selectors/adaptive.selectors";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() type: string = 'menu'
  isDekstop$: Observable<boolean>
  isOpenSettingsModal: boolean = false
  constructor(private store$: Store<AppState>) {
    this.isDekstop$ = this.store$.select(isDekstopSelector)
  }

}
