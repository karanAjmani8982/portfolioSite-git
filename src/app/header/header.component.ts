import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  panelOpenState = false;
  display = 'none';


  constructor(private router:Router) { }

  ngOnInit() {
  }

  karandeepAjmani(){
    this.router.navigate(["/Welcome"])
  }

  home(){
    this.display = 'none';
    this.router.navigate(["/Welcome"])
  }

  Contact(){
    this.display = 'none';
    this.router.navigate(["/Contact"])
  }

  myStory(){
    this.display = 'none';
    this.router.navigate(["/myStory"])
  }

  mobileHeaderButton(){
    this.display = 'block';

  }

  onCloseHandled() {
    this.display = 'none';
  }

}

