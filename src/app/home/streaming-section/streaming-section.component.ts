import { Component } from '@angular/core';
import { StreamingCardData } from '../streaming-info-card/streaming-info-card.component';

@Component({
  selector: 'app-streaming-section',
  standalone: true,
  imports: [],
  templateUrl: './streaming-section.component.html',
  styleUrl: './streaming-section.component.css'
})
export class StreamingSectionComponent {
    cardDataOne : StreamingCardData = {
      imageLink: '/src/assets/images/home/1.svg',
      heading: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
    }
    cardDataTwo : StreamingCardData = {
      imageLink: '/src/assets/images/home/1.svg',
      heading: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
    }
    cardDataThree : StreamingCardData = {
      imageLink: '/src/assets/images/home/1.svg',
      heading: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
    }
    cardDataFour : StreamingCardData = {
      imageLink: '/src/assets/images/home/1.svg',
      heading: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
    }
    cardDataFive : StreamingCardData = {
      imageLink: '/src/assets/images/home/1.svg',
      heading: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
    }
    cardDataSix : StreamingCardData = {
      imageLink: '/src/assets/images/home/1.svg',
      heading: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
    }
}
