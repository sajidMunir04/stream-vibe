import { Component, Input } from '@angular/core';


export interface MovieInfoData{
    imageLink : string,
    watchTime: string,
    views: string
}


@Component({
  selector: 'app-movie-info-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-info-card.component.html',
  styleUrl: './movie-info-card.component.css'
})
export class MovieInfoCardComponent {

  @Input()
  movieInfoData!: MovieInfoData;
}
