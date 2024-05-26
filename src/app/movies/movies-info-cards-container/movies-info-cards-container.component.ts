import { Component } from '@angular/core';
import { MovieInfoCardComponent, MovieInfoData } from '../../shared/movie-info-card/movie-info-card.component';

@Component({
  selector: 'app-movies-info-cards-container',
  standalone: true,
  imports: [MovieInfoCardComponent],
  templateUrl: './movies-info-cards-container.component.html',
  styleUrl: './movies-info-cards-container.component.css'
})
export class MoviesInfoCardsContainerComponent {
    movieInfoOne: MovieInfoData = {
      imageLink: 'assets/images/movies/movieinfo/Image.png',
      watchTime: '1h 52m',
      views: '2.5K'
    }

    movieInfoTwo: MovieInfoData = {
      imageLink: 'assets/images/movies/movieinfo/Image(1).png',
      watchTime: '1h 52m',
      views: '2.5K'
    }

    movieInfoThree: MovieInfoData = {
      imageLink: 'assets/images/movies/movieinfo/Image(2).png',
      watchTime: '1h 52m',
      views: '2.5K'
    }

    movieInfoFour: MovieInfoData = {
      imageLink: 'assets/images/movies/movieinfo/Image(3).png',
      watchTime: '1h 52m',
      views: '2.5K'
    }

    movieInfoFive: MovieInfoData = {
      imageLink: 'assets/images/movies/movieinfo/Image(4).png',
      watchTime: '1h 52m',
      views: '2.5K'
    }
}
