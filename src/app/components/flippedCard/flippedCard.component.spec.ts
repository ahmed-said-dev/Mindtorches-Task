import { ComponentFixture, TestBed } from '@angular/core/testing';

import { flippedCardComponent } from './flippedCard.component';

describe('flippedCardComponent', () => {
  let component: flippedCardComponent;
  let fixture: ComponentFixture<flippedCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [flippedCardComponent]
    });
    fixture = TestBed.createComponent(flippedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
