import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MainBannerComponent } from '../../movies/main-banner/main-banner.component';

@Component({
  selector: 'app-movies-and-shows',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,MainBannerComponent],
  templateUrl: './movies-and-shows.component.html',
  styleUrl: './movies-and-shows.component.css'
})
export class MoviesAndShowsComponent {

}
