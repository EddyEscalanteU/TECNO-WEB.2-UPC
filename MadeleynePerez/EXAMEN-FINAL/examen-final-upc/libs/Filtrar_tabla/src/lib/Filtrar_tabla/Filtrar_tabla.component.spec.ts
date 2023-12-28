import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltrarTablaComponent } from './Filtrar_tabla.component';

describe('FiltrarTablaComponent', () => {
  let component: FiltrarTablaComponent;
  let fixture: ComponentFixture<FiltrarTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrarTablaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrarTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
