import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {ChatService} from "../../../../services/chat.service";
import {IBackgroundChat} from "../../../../services/types";

@Component({
  selector: 'app-background-change',
  templateUrl: './background-change.component.html',
  styleUrls: ['./background-change.component.scss']
})
export class BackgroundChangeComponent implements OnInit {
  activeBackground:IBackgroundChat
  backgrounds: IBackgroundChat[]
  constructor(private activeRoute:Router,private chatService:ChatService) {
    this.backgrounds = chatService.getBackgrounds()
    this.activeBackground = this.backgrounds.find(background => background.active) as IBackgroundChat

  }

  ngOnInit(): void {
  }

  public back() :void{
    this.activeRoute.navigate(['user',1])
  }
  public toActiveBackground(id:string): void{
    this.activeBackground = this.chatService.toActiveBackground(id)
    localStorage.setItem('backgroundId',this.activeBackground.id)
  }
}
