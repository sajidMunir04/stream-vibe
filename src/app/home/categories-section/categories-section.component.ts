import { Component } from '@angular/core';
import { MovieClassficationCardData, MovieClassificationCardComponent } from '../../shared/movie-classification-card/movie-classification-card.component';

@Component({
    selector: 'app-categories-section',
    standalone: true,
    templateUrl: './categories-section.component.html',
    styleUrl: './categories-section.component.css',
    imports: [MovieClassificationCardComponent]
})
export class CategoriesSectionComponent {
    movieDataOne : MovieClassficationCardData = {
      images: ['/src/assets/images/home/movies/Image.png','/src/assets/images/home/movies/Image-1.png',
      '/src/assets/images/home/movies/Image-2.png','/src/assets/images/home/movies/Image-3.png'],
      classificationName: 'Action'
    }
    movieDataTwo : MovieClassficationCardData = {
      images: ['/src/assets/images/home/movies/Image.png','/src/assets/images/home/movies/Image-1.png',
      '/src/assets/images/home/movies/Image-2.png','/src/assets/images/home/movies/Image-3.png'],
      classificationName: 'Action'
    }
    movieDataThree : MovieClassficationCardData = {
      images: ['/src/assets/images/home/movies/Image.png','/src/assets/images/home/movies/Image-1.png',
      '/src/assets/images/home/movies/Image-2.png','/src/assets/images/home/movies/Image-3.png'],
      classificationName: 'Action'
    }
    movieDataFour : MovieClassficationCardData = {
      images: ['/src/assets/images/home/movies/Image.png','/src/assets/images/home/movies/Image-1.png',
      '/src/assets/images/home/movies/Image-2.png','/src/assets/images/home/movies/Image-3.png'],
      classificationName: 'Action'
    }
    movieDataFive : MovieClassficationCardData = {
      images: ['/src/assets/images/home/movies/Image.png','/src/assets/images/home/movies/Image-1.png',
      '/src/assets/images/home/movies/Image-2.png','/src/assets/images/home/movies/Image-3.png'],
      classificationName: 'Action'
    }
}
