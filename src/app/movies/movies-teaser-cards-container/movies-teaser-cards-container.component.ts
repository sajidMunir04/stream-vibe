import { Component } from '@angular/core';
import { MovieTeaserCardComponent, MovieTeaserCardData } from '../../shared/movie-teaser-card/movie-teaser-card.component';

@Component({
  selector: 'app-movies-teaser-cards-container',
  standalone: true,
  imports: [MovieTeaserCardComponent],
  templateUrl: './movies-teaser-cards-container.component.html',
  styleUrl: './movies-teaser-cards-container.component.css'
})
export class MoviesTeaserCardsContainerComponent {
    movieDataOne : MovieTeaserCardData = {
      imageLink: 'assets/images/movies/movieinfo/Image(5).png',
      releaseDate: '13 April 2023'
    }
    movieDataTwo : MovieTeaserCardData = {
      imageLink: 'assets/images/movies/movieinfo/Image(6).png',
      releaseDate: '13 April 2023'
    }
    movieDataThree : MovieTeaserCardData = {
      imageLink: 'assets/images/movies/movieinfo/Image(7).png',
      releaseDate: '13 April 2023'
    }
    movieDataFour : MovieTeaserCardData = {
      imageLink: 'assets/images/movies/movieinfo/Image(8).png',
      releaseDate: '13 April 2023'
    }
    movieDataFive : MovieTeaserCardData = {
      imageLink: 'assets/images/movies/movieinfo/Image(9).png',
      releaseDate: '13 April 2023'
    }
}
