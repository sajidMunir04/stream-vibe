import { Component, Input } from '@angular/core';

export interface MovieTeaserCardData {
    imageLink: string,
    releaseDate: string
}

@Component({
  selector: 'app-movie-teaser-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-teaser-card.component.html',
  styleUrl: './movie-teaser-card.component.css'
})
export class MovieTeaserCardComponent {
  @Input()
  teaserCardData!: MovieTeaserCardData;
}
