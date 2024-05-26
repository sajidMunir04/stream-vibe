import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTeaserCardComponent } from './movie-teaser-card.component';

describe('MovieTeaserCardComponent', () => {
  let component: MovieTeaserCardComponent;
  let fixture: ComponentFixture<MovieTeaserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieTeaserCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieTeaserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
