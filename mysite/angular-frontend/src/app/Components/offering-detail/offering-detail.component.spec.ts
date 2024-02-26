import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingDetailComponent } from './offering-detail.component';

describe('OfferingDetailComponent', () => {
  let component: OfferingDetailComponent;
  let fixture: ComponentFixture<OfferingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
