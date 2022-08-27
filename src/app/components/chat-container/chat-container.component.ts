import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {isMobileSelector, isTabletSelector} from "../../store/selectors/adaptive.selectors";
import {IBackgroundChat} from "../../services/types";
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent{
    isTablet$:Observable<boolean>
    @Output() closeChatEmitter: EventEmitter<void>= new EventEmitter<void>()
    @Input() type:string = 'menu'
    backgroundChat: IBackgroundChat
  constructor(private store$: Store<AppState>,private chatService:ChatService) {
      this.isTablet$ = store$.select(isTabletSelector)
      this.backgroundChat = chatService.getBackgrounds().find( background => background.active) ||
        chatService.getBackgrounds()[0]
  }
  public closeChat() : void{
      this.closeChatEmitter.emit()
  }


}
