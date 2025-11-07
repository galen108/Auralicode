import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingManifestoComponent } from './coding-vision.component';

describe('CodingManifestoComponent', () => {
  let component: CodingManifestoComponent;
  let fixture: ComponentFixture<CodingManifestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingManifestoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingManifestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
