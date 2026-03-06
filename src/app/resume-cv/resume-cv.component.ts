import { Component, OnInit, inject } from '@angular/core'; // inject is here
import { Title, Meta } from '@angular/platform-browser'; // Title and Meta are here
import { MatCard, MatCardHeader, MatCardContent, MatCardFooter } from "@angular/material/card";

@Component({
  selector: 'app-resume-cv',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter
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

