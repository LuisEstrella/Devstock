import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockcontentComponent } from './stockcontent.component';

describe('StockcontentComponent', () => {
  let component: StockcontentComponent;
  let fixture: ComponentFixture<StockcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
