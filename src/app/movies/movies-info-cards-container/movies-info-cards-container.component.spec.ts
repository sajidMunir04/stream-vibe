import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesInfoCardsContainerComponent } from './movies-info-cards-container.component';

describe('MoviesInfoCardsContainerComponent', () => {
  let component: MoviesInfoCardsContainerComponent;
  let fixture: ComponentFixture<MoviesInfoCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesInfoCardsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesInfoCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
