import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  nameMaterial = new FormControl('');
  emailMaterial = new FormControl('');
  textAreaMaterial = new FormControl('');
  name;
  email;
  textArea;
  subscriptions: Subscription[] = [];
  content = 'Karan(Contact Section)';

  constructor(
    private router: Router,
    private emailService: ServiceService,
    private title: Title,
    private meta: Meta
  ) {
    this.name = '';
    this.email = '';
    this.textArea = '';
  }

  ngOnInit() {
    this.title.setTitle('Karan-contact');
    this.meta.updateTag({
      name: 'description',
      content: this.content,
    });
  }

  sendToMe() {
    const body = {
      name: this.name,
      email: this.email,
      message: this.textArea,
    };
    // console.log(body);
    // window.open("https://forms.gle/6o58kQs8PujFAVKVA");

    // console.log(body);
    this.subscriptions.push(
      this.emailService.sendEmail(body).subscribe(
        (res) => {
          // console.log(res)
          if (res) {
            // console.log(res);
            this.name = '';
            this.email = '';
            this.textArea = '';
            this.router.navigate(['/Welcome']);
          }
        },
        (err) => {
          // console.log(err.statusText);
          this.name = this.name;
          this.email = this.email;
          this.textArea = this.textArea;
          this.router.navigate(['/Contact']);
        }
      )
    );
  }
}
