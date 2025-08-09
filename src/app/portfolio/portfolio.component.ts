import { Component } from '@angular/core';

interface Project {
  title: string;
  outcome: string;
  description: string;
  techStack: string[];
  metrics?: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Membership Platform Revamp',
      outcome: 'Boosted signups by 30%',
      description: 'Redesigned the entire membership onboarding flow for a regional nonprofit.',
      techStack: ['Angular', 'Node.js', 'PostgreSQL'],
      metrics: 'Load time improved by 40%, accessibility compliance achieved.'
    },
    {
      title: 'E-commerce Checkout Optimization',
      outcome: 'Reduced cart abandonment by 15%',
      description: 'Implemented streamlined checkout process and real-time inventory updates.',
      techStack: ['React', 'Express', 'MongoDB']
    },
    {
      title: 'Mobile Portfolio App',
      outcome: 'Enhanced mobile user engagement',
      description: 'Built a React Native app for a personal portfolio showcasing multimedia projects.',
      techStack: ['React Native', 'Firebase']
    }
  ];
}
