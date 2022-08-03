import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {
    isMobile:boolean = true
  constructor() { }

  ngOnInit(): void {
      setInterval(()=>{
        this.isMobile = window.innerWidth <= 1024;
      },300)
  }

}
