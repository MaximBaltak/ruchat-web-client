import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {isMobileSelector} from "../../store/selectors/adaptive.selectors";

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent{
    isMobile$:Observable<boolean>
    @Input() type:string = 'menu'
  constructor(private store$: Store<AppState>) {
      this.isMobile$ = store$.select(isMobileSelector)
  }


}
