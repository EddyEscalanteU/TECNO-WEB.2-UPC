import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileNavbaComponent } from './mobile_navba.component';

describe('MobileNavbaComponent', () => {
  let component: MobileNavbaComponent;
  let fixture: ComponentFixture<MobileNavbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavbaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileNavbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
