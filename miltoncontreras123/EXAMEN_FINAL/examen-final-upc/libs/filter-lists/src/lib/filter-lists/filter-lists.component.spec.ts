import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterListsComponent } from './filter-lists.component';

describe('FilterListsComponent', () => {
  let component: FilterListsComponent;
  let fixture: ComponentFixture<FilterListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterListsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
