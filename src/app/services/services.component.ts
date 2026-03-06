import { Component, OnInit, inject } from '@angular/core'; // inject is here
import { Title, Meta } from '@angular/platform-browser'; // Title and Meta are here
import { MatCard, MatCardHeader, MatCardContent, MatCardFooter } from "@angular/material/card";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    RouterLink
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  // These should be defined inside the class, but before the ngOnInit
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    // These should work now because 'this.titleService' matches the variable above
    this.titleService.setTitle('Service Tiers | Auralicode');
    this.metaService.updateTag({
      name: 'Services',
      content: 'View my professional B2B web development services.'
    });
  }
}



