import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagFloorInputComponent } from './bag-floor-input.component';

describe('BagFloorInputComponent', () => {
  let component: BagFloorInputComponent;
  let fixture: ComponentFixture<BagFloorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagFloorInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagFloorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
