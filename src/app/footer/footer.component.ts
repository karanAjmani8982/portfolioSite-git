import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  instagram(){
    window.open("https://instagram.com/karandeep.ajmani");
  }

  facebook(){
    window.open("https://www.facebook.com/karanajmni7272");
  }

}
