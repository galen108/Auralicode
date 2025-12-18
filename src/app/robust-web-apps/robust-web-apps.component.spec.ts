import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobustWebAppsComponent } from './robust-web-apps.component';

describe('RobustWebAppsComponent', () => {
  let component: RobustWebAppsComponent;
  let fixture: ComponentFixture<RobustWebAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobustWebAppsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RobustWebAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
