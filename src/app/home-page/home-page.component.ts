import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  content = "Karan(Homepage)"

  constructor(private router:Router, private title:Title,private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Karan-portfolioSite')
    this.meta.updateTag({
      name: "description",
      content: this.content
    })
  }

  letsConnect(){
    this.router.navigate(["/Contact"])
  }

}
