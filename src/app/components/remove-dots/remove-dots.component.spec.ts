import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDotsComponent } from './remove-dots.component';

describe('RemoveDotsComponent', () => {
  let component: RemoveDotsComponent;
  let fixture: ComponentFixture<RemoveDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveDotsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
