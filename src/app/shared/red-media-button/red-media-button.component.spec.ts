import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedMediaButtonComponent } from './red-media-button.component';

describe('RedMediaButtonComponent', () => {
  let component: RedMediaButtonComponent;
  let fixture: ComponentFixture<RedMediaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedMediaButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedMediaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
