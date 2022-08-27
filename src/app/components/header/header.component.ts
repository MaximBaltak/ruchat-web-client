import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs";
import {AppState} from "../../store";
import {Store} from "@ngrx/store";
import {isMobileSelector, isTabletSelector} from "../../store/selectors/adaptive.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  isTablet$: Observable<boolean>
  @Output() closeChatEmitter: EventEmitter<void> = new EventEmitter<void>()
  constructor(private store$: Store<AppState>) {
    this.isTablet$ = this.store$.select(isTabletSelector)
  }
  public closeChat () :void{
    this.closeChatEmitter.emit()
  }

}
