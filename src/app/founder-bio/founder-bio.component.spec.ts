import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderBioComponent } from './founder-bio.component';

describe('FounderBioComponent', () => {
  let component: FounderBioComponent;
  let fixture: ComponentFixture<FounderBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FounderBioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FounderBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
