import { Component } from '@angular/core';
import { MovieClassficationCardData, MovieClassificationCardComponent } from '../../shared/movie-classification-card/movie-classification-card.component';
import { HeaderData, SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
    selector: 'app-categories-section',
    standalone: true,
    templateUrl: './categories-section.component.html',
    styleUrl: './categories-section.component.css',
    imports: [MovieClassificationCardComponent,SectionHeaderComponent]
})
export class CategoriesSectionComponent {

    headerData: HeaderData ={
      heading: 'Explore our wide variety of categories',
      description: 'Whether you\'re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new'
    }

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
