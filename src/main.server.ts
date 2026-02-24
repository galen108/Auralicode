// Add these to the VERY TOP of main.server.ts
(global as any).window = {};
(global as any).document = (global as any).window.document = {
  documentElement: { style: {} },
  createElement: () => ({ style: {} }),
};
(global as any).Node = {};
(global as any).navigator = { userAgent: '' };
(global as any).Event = {};
(global as any).KeyboardEvent = {};
(global as any).MouseEvent = {};

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
