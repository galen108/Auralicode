import { Component, OnInit, inject } from '@angular/core'; // inject is here
import { Title, Meta } from '@angular/platform-browser'; // Title and Meta are here
import { MatCard, MatCardHeader, MatCardContent, MatCardFooter } from "@angular/material/card";

@Component({
  selector: 'app-coding-vision',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter
  ],
  templateUrl: './coding-vision.component.html',
  styleUrl: './coding-vision.component.css'
})
export class CodingVisionComponent implements OnInit {
  // These should be defined inside the class, but before the ngOnInit
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    // These should work now because 'this.titleService' matches the variable above
    this.titleService.setTitle('My Vision | Auralicode');
    this.metaService.updateTag({
      name: 'Coding Vision',
      content: 'View my professional B2B web coding vision.'
    });
  }
}

