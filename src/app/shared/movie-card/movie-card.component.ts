import { Component, Input } from '@angular/core';

export interface MovieCardData{
  imageLink: string,
  movieLength: string,
  rating: number,
  reviewCount: number
}


@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input()
  movieCardData!: MovieCardData;
}
