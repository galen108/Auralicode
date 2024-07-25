import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCvComponent } from './resume-cv.component';

describe('ResumeCvComponent', () => {
  let component: ResumeCvComponent;
  let fixture: ComponentFixture<ResumeCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeCvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
