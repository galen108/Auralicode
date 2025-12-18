import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemCoherenceComponent } from './system-coherence.component';

describe('SystemCoherenceComponent', () => {
  let component: SystemCoherenceComponent;
  let fixture: ComponentFixture<SystemCoherenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemCoherenceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SystemCoherenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define pillars', () => {
    expect(component.pillars.length).toBeGreaterThan(0);
  });
});
