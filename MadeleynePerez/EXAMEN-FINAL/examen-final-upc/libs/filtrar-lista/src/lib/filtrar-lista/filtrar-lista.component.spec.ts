import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltrarListaComponent } from './filtrar-lista.component';

describe('FiltrarListaComponent', () => {
  let component: FiltrarListaComponent;
  let fixture: ComponentFixture<FiltrarListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrarListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
