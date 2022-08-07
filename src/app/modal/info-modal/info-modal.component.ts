import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {

  isMobile:boolean = false;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.isMobile = window.innerWidth <= 600
    },300)
  }

}
