import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    isMobile:boolean = false;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.isMobile = window.innerWidth <= 600
    },300)
  }

}
