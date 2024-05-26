import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchTimeInfoComponent } from './watch-time-info.component';

describe('WatchTimeInfoComponent', () => {
  let component: WatchTimeInfoComponent;
  let fixture: ComponentFixture<WatchTimeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchTimeInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchTimeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
