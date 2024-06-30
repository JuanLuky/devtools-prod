import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertTextComponent } from './convert-text.component';

describe('ConvertTextComponent', () => {
  let component: ConvertTextComponent;
  let fixture: ComponentFixture<ConvertTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvertTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
