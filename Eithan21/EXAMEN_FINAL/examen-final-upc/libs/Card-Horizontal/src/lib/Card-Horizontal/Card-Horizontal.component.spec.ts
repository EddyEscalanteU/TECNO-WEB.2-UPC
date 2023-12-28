import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardHorizontalComponent } from './Card-Horizontal.component';

describe('CardHorizontalComponent', () => {
  let component: CardHorizontalComponent;
  let fixture: ComponentFixture<CardHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHorizontalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
