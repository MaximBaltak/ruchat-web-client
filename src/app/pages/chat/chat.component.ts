import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AppState} from "../../store";
import {Store} from "@ngrx/store";
import {isDekstopSelector} from "../../store/selectors/adaptive.selectors";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
    isDekstop$:Observable<boolean>
    isChat:boolean
  constructor(private store$: Store<AppState>) {
      this.isDekstop$ = store$.select(isDekstopSelector)
      this.isChat = false
  }
  public openChat() :void{
      this.isChat = true
  }
  public closeChat(): void{
      this.isChat = false
  }


}
