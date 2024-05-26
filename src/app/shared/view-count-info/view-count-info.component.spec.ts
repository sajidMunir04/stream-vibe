import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCountInfoComponent } from './view-count-info.component';

describe('ViewCountInfoComponent', () => {
  let component: ViewCountInfoComponent;
  let fixture: ComponentFixture<ViewCountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCountInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
