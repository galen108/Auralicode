import { Component } from '@angular/core';

interface Role {
  title: string;
  company: string;
  years: string;
  description: string;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  previousRoles: Role[] = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      years: '2015–2020',
      description: 'Led the frontend team building scalable SPA apps using Angular and React.'
    },
    {
      title: 'Web Developer',
      company: 'Creative Digital Agency',
      years: '2010–2015',
      description: 'Designed and developed responsive websites for clients across various industries.'
    }
  ];
}
