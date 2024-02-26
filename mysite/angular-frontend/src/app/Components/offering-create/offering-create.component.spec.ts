import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiFormGroupModule } from '@simpl/siemens-brand-ng/form-group';
import { OfferingCreateComponent } from './offering-create.component';

describe('OfferingCreateComponent', () => {
  let component: OfferingCreateComponent;
  let fixture: ComponentFixture<OfferingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferingCreateComponent ],
      imports: [SiFormGroupModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
