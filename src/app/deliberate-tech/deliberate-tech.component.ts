import { Component, OnInit, inject } from '@angular/core'; // inject is here
import { Title, Meta } from '@angular/platform-browser'; // Title and Meta are here
import { MatCard, MatCardHeader, MatCardContent, MatCardFooter } from "@angular/material/card";

@Component({
  selector: 'app-deliberate-tech',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter
  ],
  templateUrl: './deliberate-tech.component.html',
  styleUrl: './deliberate-tech.component.css'
})
export class DeliberateTechComponent implements OnInit {
  // These should be defined inside the class, but before the ngOnInit
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    // These should work now because 'this.titleService' matches the variable above
    this.titleService.setTitle('My Methodology | Auralicode');
    this.metaService.updateTag({
      name: 'Deliberate Tech',
      content: 'View my professional B2B deliberate tech page.'
    });
  }
}
