import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingMainComponent } from './saving-main.component';

describe('SavingMainComponent', () => {
  let component: SavingMainComponent;
  let fixture: ComponentFixture<SavingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
