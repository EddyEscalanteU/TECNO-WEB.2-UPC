import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourtainMenuComponent } from './courtain-menu.component';

describe('CourtainMenuComponent', () => {
  let component: CourtainMenuComponent;
  let fixture: ComponentFixture<CourtainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtainMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourtainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
