import { Component } from '@angular/core';
import { CategoriesSectionComponent } from '../../home/categories-section/categories-section.component';
import { MovieClassficationCardData, MovieClassificationCardComponent } from '../../shared/movie-classification-card/movie-classification-card.component';
import { HeaderData, SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { MovieInfoCardComponent } from '../../shared/movie-info-card/movie-info-card.component';
import { MoviesInfoCardsContainerComponent } from '../movies-info-cards-container/movies-info-cards-container.component';
import { MoviesTeaserCardsContainerComponent } from '../movies-teaser-cards-container/movies-teaser-cards-container.component';

@Component({
  selector: 'app-movies-section',
  standalone: true,
  imports: [CategoriesSectionComponent,MovieClassificationCardComponent,SectionHeaderComponent,MoviesInfoCardsContainerComponent,MoviesTeaserCardsContainerComponent],
  templateUrl: './movies-section.component.html',
  styleUrl: './movies-section.component.css'
})
export class MoviesSectionComponent {
  movieDataOne : MovieClassficationCardData = {
    images: ['assets/images/home/movies/Image.png','assets/images/home/movies/Image-1.png',
    '/assets/images/home/movies/Image-2.png','assets/images/home/movies/Image-3.png'],
    classificationName: 'Action'
  }
  movieDataTwo : MovieClassficationCardData = {
    images: ['assets/images/home/movies/Image.png','assets/images/home/movies/Image-1.png',
    'assets/images/home/movies/Image-2.png','assets/images/home/movies/Image-3.png'],
    classificationName: 'Adventure'
  }
  movieDataThree : MovieClassficationCardData = {
    images: ['assets/images/home/movies/Image.png','assets/images/home/movies/Image-1.png',
    'assets/images/home/movies/Image-2.png','assets/images/home/movies/Image-3.png'],
    classificationName: 'Comedy'
  }
  movieDataFour : MovieClassficationCardData = {
    images: ['assets/images/home/movies/Image.png','assets/images/home/movies/Image-1.png',
    'assets/images/home/movies/Image-2.png','assets/images/home/movies/Image-3.png'],
    classificationName: 'Drama'
  }
  movieDataFive : MovieClassficationCardData = {
    images: ['assets/images/home/movies/Image.png','assets/images/home/movies/Image-1.png',
    'assets/images/home/movies/Image-2.png','assets/images/home/movies/Image-3.png'],
    classificationName: 'Horror'
  }
}
