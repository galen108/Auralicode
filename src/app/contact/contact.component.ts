import { Component, OnInit, inject } from '@angular/core'; // inject is here
import { Title, Meta } from '@angular/platform-browser'; // Title and Meta are here
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
  // Tools (Private) - Only for this TS file
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    this.titleService.setTitle('My Vision | Auralicode');
    this.metaService.updateTag({ name: 'Contact', content: 'View my contact page.' });
  }
}
