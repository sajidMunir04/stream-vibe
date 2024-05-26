import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTeaserCardsContainerComponent } from './movies-teaser-cards-container.component';

describe('MoviesTeaserCardsContainerComponent', () => {
  let component: MoviesTeaserCardsContainerComponent;
  let fixture: ComponentFixture<MoviesTeaserCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesTeaserCardsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesTeaserCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
