import { Component, OnInit, inject } from '@angular/core'; // inject is here
import { Title, Meta } from '@angular/platform-browser'; // Title and Meta are here
import { MatCard, MatCardHeader, MatCardContent, MatCardFooter } from "@angular/material/card";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-enterprise-grade',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    RouterLink
  ],
  templateUrl: './enterprise-grade.component.html',
  styleUrl: './enterprise-grade.component.css'
})
export class EnterpriseGradeComponent implements OnInit {
  // These should be defined inside the class, but before the ngOnInit
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    // These should work now because 'this.titleService' matches the variable above
    this.titleService.setTitle('Foundational Service | Auralicode');
    this.metaService.updateTag({
      name: 'Web Foundations',
      content: 'View my professional B2B enterprise grade page.'
    });
  }
}



