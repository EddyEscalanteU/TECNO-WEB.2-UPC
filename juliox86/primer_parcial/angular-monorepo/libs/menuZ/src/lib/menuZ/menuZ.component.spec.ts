import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuZComponent } from './menuZ.component';

describe('MenuZComponent', () => {
  let component: MenuZComponent;
  let fixture: ComponentFixture<MenuZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuZComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
