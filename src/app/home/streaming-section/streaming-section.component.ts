import { Component } from '@angular/core';
import { StreamingCardData, StreamingInfoCardComponent } from '../streaming-info-card/streaming-info-card.component';
import { HeaderData, SectionHeaderComponent } from '../../shared/section-header/section-header.component';

@Component({
  selector: 'app-streaming-section',
  standalone: true,
  imports: [SectionHeaderComponent,StreamingInfoCardComponent],
  templateUrl: './streaming-section.component.html',
  styleUrl: './streaming-section.component.css'
})
export class StreamingSectionComponent {

    headerData : HeaderData ={
      heading: 'We Provide you streaming experience across various devices.',
      description: 'With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.'
    }

    cardDataOne : StreamingCardData = {
      imageLink: 'assets/images/home/1.svg',
      heading: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
    }
    cardDataTwo : StreamingCardData = {
      imageLink: 'assets/images/home/1.svg',
      heading: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
    }
    cardDataThree : StreamingCardData = {
      imageLink: 'assets/images/home/1.svg',
      heading: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
    }
    cardDataFour : StreamingCardData = {
      imageLink: 'assets/images/home/1.svg',
      heading: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
    }
    cardDataFive : StreamingCardData = {
      imageLink: 'assets/images/home/1.svg',
      heading: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
    }
    cardDataSix : StreamingCardData = {
      imageLink: 'assets/images/home/1.svg',
      heading: 'Smartphones',
      description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'
    }
}
