import { Component, OnInit, inject } from '@angular/core'; // inject is here
import { Title, Meta } from '@angular/platform-browser'; // Title and Meta are here
import { MatCard, MatCardHeader, MatCardContent, MatCardFooter } from "@angular/material/card";

@Component({
  selector: 'app-system-coherence',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter
  ],
  templateUrl: './system-coherence.component.html',
  styleUrl: './system-coherence.component.css'
})
export class SystemCoherenceComponent implements OnInit {
  // These should be defined inside the class, but before the ngOnInit
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    // These should work now because 'this.titleService' matches the variable above
    this.titleService.setTitle('My Architecture | Auralicode');
    this.metaService.updateTag({
      name: 'System Coherence',
      content: 'View my professional B2B system coherence page.'
    });
  }
}
