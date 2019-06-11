import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingCardsComponent } from './existing-cards.component';

describe('ExistingCardsComponent', () => {
  let component: ExistingCardsComponent;
  let fixture: ComponentFixture<ExistingCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
