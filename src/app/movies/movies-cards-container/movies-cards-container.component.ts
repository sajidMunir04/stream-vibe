import { Component } from '@angular/core';
import { MovieCardComponent, MovieCardData } from '../../shared/movie-card/movie-card.component';

@Component({
  selector: 'app-movies-cards-container',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movies-cards-container.component.html',
  styleUrl: './movies-cards-container.component.css'
})
export class MoviesCardsContainerComponent {
  movieOne : MovieCardData ={
    imageLink: 'assets/images/movies/movieinfo/Image(10).png',
    movieLength: '1h 30min',
    rating: 4,
    reviewCount: 18000
  }
}
