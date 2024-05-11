import { Component, Input } from '@angular/core';
import { MediaButtonData, RedMediaButtonComponent } from '../../shared/red-media-button/red-media-button.component';

@Component({
  selector: 'app-homebanner',
  standalone: true,
  imports: [RedMediaButtonComponent],
  templateUrl: './homebanner.component.html',
  styleUrl: './homebanner.component.css'
})
export class HomebannerComponent {
     mediaButtonData : MediaButtonData ={
      buttonText: 'Start Watching Now',
      link: '#'
    }
}
