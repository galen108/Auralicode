import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-system-coherence',
  templateUrl: './system-coherence.component.html',
  styleUrls: ['./system-coherence.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemCoherenceComponent {
  pageTitle = 'System Coherence';

  pillars = [
    {
      title: 'Single Source of Identity',
      description:
        'One canonical identity authority across web, mobile, and backend systems.'
    },
    {
      title: 'Unified Session Model',
      description:
        'Consistent session behavior everywhere—authenticate once, remain authenticated.'
    },
    {
      title: 'Explicit Handoffs',
      description:
        'Designed platform handoffs with clear contracts, never hope-based redirects.'
    },
    {
      title: 'Intentional Integration',
      description:
        'Integrations are deliberate, tested, and reviewed so users never experience seams.'
    }
  ];
}
