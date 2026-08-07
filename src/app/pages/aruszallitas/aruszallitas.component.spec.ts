import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AruszallitasComponent } from './aruszallitas.component';

describe('AruszallitasComponent', () => {
  let component: AruszallitasComponent;
  let fixture: ComponentFixture<AruszallitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AruszallitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AruszallitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
