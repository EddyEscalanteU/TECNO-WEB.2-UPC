import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovileNavbarComponent } from './Movile-Navbar.component';

describe('MovileNavbarComponent', () => {
  let component: MovileNavbarComponent;
  let fixture: ComponentFixture<MovileNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovileNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovileNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
