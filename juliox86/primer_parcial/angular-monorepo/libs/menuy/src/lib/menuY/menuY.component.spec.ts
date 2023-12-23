import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuYComponent } from './menuY.component';

describe('MenuYComponent', () => {
  let component: MenuYComponent;
  let fixture: ComponentFixture<MenuYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuYComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
