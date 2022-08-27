import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AppState} from "../../store";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {isDekstopSelector} from "../../store/selectors/adaptive.selectors";
import {
  closeModalsAction,
  openSettingsModalAction,
} from "../../store/actions/modals.actions";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() type: string = 'menu'
  @Output() openChatEmitter: EventEmitter<void> = new EventEmitter<void>()
  isDekstop$: Observable<boolean>
  constructor(private store$: Store<AppState>) {
    this.isDekstop$ = this.store$.select(isDekstopSelector)
  }
  public openSettingsModal (): void{
    this.store$.dispatch(openSettingsModalAction())
  }
  public closeSettingsModal (): void{
    this.store$.dispatch(closeModalsAction())
  }
  public openChat(): void{
    this.openChatEmitter.emit()
  }
}
