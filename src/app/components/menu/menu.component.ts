import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isBigWidth: boolean = true
  isTablet:boolean = true
  @Input() type:string = 'menu'
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.isBigWidth = window.innerWidth > 480
      this.isTablet = window.innerWidth >  1024
    },300)
  }

}
