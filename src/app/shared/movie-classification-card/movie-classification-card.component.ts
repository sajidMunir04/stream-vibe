import { Component, Input } from '@angular/core';

export interface MovieClassficationCardData{
  images: string[],
  classificationName: string
}

@Component({
  selector: 'app-movie-classification-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-classification-card.component.html',
  styleUrl: './movie-classification-card.component.css'
})
export class MovieClassificationCardComponent {
  @Input()
  classificationData!: MovieClassficationCardData;
}
