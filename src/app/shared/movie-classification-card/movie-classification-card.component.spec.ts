import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieClassificationCardComponent } from './movie-classification-card.component';

describe('MovieClassificationCardComponent', () => {
  let component: MovieClassificationCardComponent;
  let fixture: ComponentFixture<MovieClassificationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieClassificationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieClassificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
