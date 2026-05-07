import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipInput } from './tip-input';

describe('TipInput', () => {
  let component: TipInput;
  let fixture: ComponentFixture<TipInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipInput],
    }).compileComponents();

    fixture = TestBed.createComponent(TipInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
