import { Component, OnInit, inject } from '@angular/core'; // inject is here
import { Title, Meta } from '@angular/platform-browser'; // Title and Meta are here
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; // DomSanitizer and SafeUrl are here
import { MatCard, MatCardHeader, MatCardContent, MatCardFooter } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'app-contact',
    imports: [
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardFooter,
        MatButtonModule
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  // These should be defined inside the class, but before the ngOnInit
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private sanitizer = inject(DomSanitizer);
  // Mark the URL as trusted
  smsLink: SafeUrl = this.sanitizer.bypassSecurityTrustUrl("sms:+13015805172?&body=Hi Founder! I'm interested in connecting.");

  ngOnInit(): void {
    // These should work now because 'this.titleService' matches the variable above
    this.titleService.setTitle('My Vision | Auralicode');
    this.metaService.updateTag({
      name: 'Contact',
      content: 'View my professional B2B web contact page.'
    });
  }
}
