import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCpfComponent } from './validate-cpf.component';

describe('ValidateCpfComponent', () => {
  let component: ValidateCpfComponent;
  let fixture: ComponentFixture<ValidateCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateCpfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
