import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningMainComponent } from './earning-main.component';

describe('EarningMainComponent', () => {
  let component: EarningMainComponent;
  let fixture: ComponentFixture<EarningMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
