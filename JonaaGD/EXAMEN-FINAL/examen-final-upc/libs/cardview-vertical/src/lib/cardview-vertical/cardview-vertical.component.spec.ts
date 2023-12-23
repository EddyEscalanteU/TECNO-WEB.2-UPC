import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardviewVerticalComponent } from './cardview-vertical.component';

describe('CardviewVerticalComponent', () => {
  let component: CardviewVerticalComponent;
  let fixture: ComponentFixture<CardviewVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardviewVerticalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardviewVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
