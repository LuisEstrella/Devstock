import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevmainComponent } from './devmain.component';

describe('DevmainComponent', () => {
  let component: DevmainComponent;
  let fixture: ComponentFixture<DevmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
