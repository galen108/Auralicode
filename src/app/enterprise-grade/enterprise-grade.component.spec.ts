import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseWebComponent } from './enterprise-web.component';

describe('EnterpriseInnovationComponent', () => {
  let component: EnterpriseWebComponent;
  let fixture: ComponentFixture<EnterpriseWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterpriseWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
