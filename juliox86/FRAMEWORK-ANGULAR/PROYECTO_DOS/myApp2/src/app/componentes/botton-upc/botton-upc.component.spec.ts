import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonUpcComponent } from './botton-upc.component';

describe('BottonUpcComponent', () => {
  let component: BottonUpcComponent;
  let fixture: ComponentFixture<BottonUpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottonUpcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottonUpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
