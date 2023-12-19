import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuMegaComponent } from './menu-mega.component';

describe('MenuMegaComponent', () => {
  let component: MenuMegaComponent;
  let fixture: ComponentFixture<MenuMegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMegaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuMegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
