import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldmunkaComponent } from './foldmunka.component';

describe('FoldmunkaComponent', () => {
  let component: FoldmunkaComponent;
  let fixture: ComponentFixture<FoldmunkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoldmunkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoldmunkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
