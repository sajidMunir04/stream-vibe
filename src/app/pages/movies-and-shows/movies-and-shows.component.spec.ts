import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesAndShowsComponent } from './movies-and-shows.component';

describe('MoviesAndShowsComponent', () => {
  let component: MoviesAndShowsComponent;
  let fixture: ComponentFixture<MoviesAndShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesAndShowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesAndShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
