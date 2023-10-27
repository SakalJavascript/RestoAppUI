import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBillsPageComponent } from './all-bills-page.component';

describe('AllBillsPageComponent', () => {
  let component: AllBillsPageComponent;
  let fixture: ComponentFixture<AllBillsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBillsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
