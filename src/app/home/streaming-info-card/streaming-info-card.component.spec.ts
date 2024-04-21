import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingInfoCardComponent } from './streaming-info-card.component';

describe('StreamingInfoCardComponent', () => {
  let component: StreamingInfoCardComponent;
  let fixture: ComponentFixture<StreamingInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamingInfoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamingInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
