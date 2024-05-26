import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesCardsContainerComponent } from './movies-cards-container.component';

describe('MoviesCardsContainerComponent', () => {
  let component: MoviesCardsContainerComponent;
  let fixture: ComponentFixture<MoviesCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesCardsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
