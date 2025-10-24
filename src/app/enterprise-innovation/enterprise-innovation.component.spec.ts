import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseInnovationComponent } from './enterprise-innovation.component';

describe('EnterpriseInnovationComponent', () => {
  let component: EnterpriseInnovationComponent;
  let fixture: ComponentFixture<EnterpriseInnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterpriseInnovationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterpriseInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
