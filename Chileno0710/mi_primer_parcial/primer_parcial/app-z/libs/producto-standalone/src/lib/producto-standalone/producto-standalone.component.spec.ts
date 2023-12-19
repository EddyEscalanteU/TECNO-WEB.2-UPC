import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoStandaloneComponent } from './producto-standalone.component';

describe('ProductoStandaloneComponent', () => {
  let component: ProductoStandaloneComponent;
  let fixture: ComponentFixture<ProductoStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoStandaloneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
