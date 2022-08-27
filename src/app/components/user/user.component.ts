import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() isBlocked:boolean = false
  @Input() isAdmin:boolean = false
  @Output() openChatEmitter: EventEmitter<void> = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }
  public openChat () : void {
    this.openChatEmitter.emit()
  }

}
