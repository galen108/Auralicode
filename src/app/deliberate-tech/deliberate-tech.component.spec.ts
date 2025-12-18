import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliberateTechnologyComponent } from './deliberate-technology.component';

describe('DeliberateTechnologyComponent', () => {
  let component: DeliberateTechnologyComponent;
  let fixture: ComponentFixture<DeliberateTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliberateTechnologyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliberateTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
