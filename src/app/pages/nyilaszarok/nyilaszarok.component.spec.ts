import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyilaszarokComponent } from './nyilaszarok.component';

describe('NyilaszarokComponent', () => {
  let component: NyilaszarokComponent;
  let fixture: ComponentFixture<NyilaszarokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NyilaszarokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NyilaszarokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
