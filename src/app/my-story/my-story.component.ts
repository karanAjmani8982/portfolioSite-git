import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-my-story',
  templateUrl: './my-story.component.html',
  styleUrls: ['./my-story.component.css']
})
export class MyStoryComponent implements OnInit {
  content = "About Karan(My Story)"

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle('Karan-myStory');
    this.meta.updateTag({
      name: "description",
      content: this.content
    })


    this.meta.addTag({name: 'twitter:card', content: 'summary'});
    this.meta.addTag({name: 'twitter:site', content: '@Karan-myStory'});
    this.meta.addTag({name: 'twitter:title', content: this.content});
    this.meta.addTag({name: 'twitter:description', content: this.content});
    this.meta.addTag({name: 'twitter:text:description', content: this.content});
    // this.meta.addTag({name: 'twitter:image', content: 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200'});

  }

}
