import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFoundationsComponent } from './web-foundations.component';

describe('WebFoundationsComponent', () => {
  let component: WebFoundationsComponent;
  let fixture: ComponentFixture<WebFoundationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebFoundationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebFoundationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
