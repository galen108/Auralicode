(global as any).window = {};
(global as any).document = {
  documentElement: { style: {} },
  createElement: () => ({ style: {} }),
};
(global as any).requestAnimationFrame = (cb: any) => setTimeout(cb, 0);
(global as any).cancelAnimationFrame = (id: any) => clearTimeout(id);
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
