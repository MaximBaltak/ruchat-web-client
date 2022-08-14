import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-buttons-control',
  templateUrl: './buttons-control.component.html',
  styleUrls: ['./buttons-control.component.scss']
})
export class ButtonsControlComponent implements OnInit {
  @Input() isChat:boolean = true
  constructor(private activeRoute:Router) { }

  ngOnInit(): void {

  }
  public exit() : void {
    this.activeRoute.navigate([''])
  }
  public toAdmin() :void{
    this.activeRoute.navigate(['admin/users'])
  }
  public toNews() : void{
    this.activeRoute.navigate(['news'])
  }
  public toChat() : void{
    this.activeRoute.navigate(['user',1])
  }
}
