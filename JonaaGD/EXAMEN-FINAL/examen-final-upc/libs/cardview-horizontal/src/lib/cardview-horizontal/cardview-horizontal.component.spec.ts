import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardviewHorizontalComponent } from './cardview-horizontal.component';

describe('CardviewHorizontalComponent', () => {
  let component: CardviewHorizontalComponent;
  let fixture: ComponentFixture<CardviewHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardviewHorizontalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardviewHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
