import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    isDekstop:boolean = true
  constructor() { }

  ngOnInit(): void {
      setInterval(()=>{
        this.isDekstop = window.innerWidth > 1024
      },300)
  }

}
