import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittszallitasComponent } from './sittszallitas.component';

describe('SittszallitasComponent', () => {
  let component: SittszallitasComponent;
  let fixture: ComponentFixture<SittszallitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SittszallitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SittszallitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
