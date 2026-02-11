import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaggedBenefitsComponent } from './bagged-benefits.component';

describe('BaggedBenefitsComponent', () => {
  let component: BaggedBenefitsComponent;
  let fixture: ComponentFixture<BaggedBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaggedBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaggedBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
