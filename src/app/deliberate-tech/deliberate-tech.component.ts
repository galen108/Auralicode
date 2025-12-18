import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-deliberate-technology',
  templateUrl: './deliberate-technology.component.html',
  styleUrls: ['./deliberate-technology.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeliberateTechnologyComponent {
  pageTitle = 'Deliberate Technology';

  principles = [
    'Longevity and ecosystem health',
    'Clarity and human comprehension',
    'Security and explicit boundaries',
    'Operational simplicity',
    'Reduced cognitive load'
  ];
}
