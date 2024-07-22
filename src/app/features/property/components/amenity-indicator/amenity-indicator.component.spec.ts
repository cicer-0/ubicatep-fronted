import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenityIndicatorComponent } from './amenity-indicator.component';

describe('AmenityIndicatorComponent', () => {
  let component: AmenityIndicatorComponent;
  let fixture: ComponentFixture<AmenityIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmenityIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmenityIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
