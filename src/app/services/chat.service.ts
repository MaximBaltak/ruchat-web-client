import { Injectable } from '@angular/core';
import {IBackgroundChat} from "./types";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private backgrounds:IBackgroundChat[] = [
    {
      id: '1',
      path: '../assets/image/background-1.jpg',
      active:false
    },
    {
      id: '2',
      path: '../assets/image/background-2.jpg',
      active:false
    },
    {
      id: '3',
      path: '../assets/image/background-3.jpg',
      active:false
    },
    {
      id: '4',
      path: '../assets/image/background-4.jpg',
      active:false
    },
    {
      id: '5',
      path: '../assets/image/background-5.jpg',
      active:false
    },
    {
      id: '6',
      path: '../assets/image/background-6.png',
      active:false
    },
  ]
  constructor() {
    const id:string = localStorage.getItem('backgroundId') || '1'
    this.backgrounds.map(background=>{
      if(background.id == id){
        background.active = true
      }
    })
  }
  public getBackgrounds():IBackgroundChat[] {
    return this.backgrounds
  }
  public toActiveBackground(id:string):IBackgroundChat{
    let activeBackground: IBackgroundChat = {} as IBackgroundChat
    this.backgrounds.map( background =>{
      if(background.id === id){
        background.active = true
        activeBackground = {...background}
        return
      }
      background.active = false
    })
    return activeBackground
  }
}
