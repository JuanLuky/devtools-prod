import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAccentsComponent } from './remove-accents.component';

describe('RemoveAccentsComponent', () => {
  let component: RemoveAccentsComponent;
  let fixture: ComponentFixture<RemoveAccentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveAccentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveAccentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
