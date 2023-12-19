import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuXComponent } from './menuX.component';

describe('MenuXComponent', () => {
  let component: MenuXComponent;
  let fixture: ComponentFixture<MenuXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuXComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
