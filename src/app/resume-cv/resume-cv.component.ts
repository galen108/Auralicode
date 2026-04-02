import { Component, OnInit, inject } from '@angular/core'; // inject is here
import { Title, Meta } from '@angular/platform-browser'; // Title and Meta are here
import { MatCard, MatCardHeader, MatCardContent, MatCardFooter } from "@angular/material/card";
import { MatAnchor } from "@angular/material/button";

@Component({
    selector: 'app-resume-cv',
    imports: [
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardFooter,
        MatAnchor
    ],
    templateUrl: './resume-cv.component.html',
    styleUrl: './resume-cv.component.css'
})
export class ResumeCvComponent implements OnInit {
  // These should be defined inside the class, but before the ngOnInit
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit(): void {
    // These should work now because 'this.titleService' matches the variable above
    this.titleService.setTitle('My Resumes | Auralicode');
    this.metaService.updateTag({
      name: 'Resume/CV',
      content: 'View my professional B2B web resume page.'
    });
  }
}

