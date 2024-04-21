import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingSectionComponent } from './streaming-section.component';

describe('StreamingSectionComponent', () => {
  let component: StreamingSectionComponent;
  let fixture: ComponentFixture<StreamingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamingSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
