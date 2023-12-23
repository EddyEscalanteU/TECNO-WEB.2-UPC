import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardViewVerticalComponent } from './card-view-vertical.component';

describe('CardViewVerticalComponent', () => {
  let component: CardViewVerticalComponent;
  let fixture: ComponentFixture<CardViewVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardViewVerticalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardViewVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
