import { Component, Input } from '@angular/core';

export interface StreamingCardData{
    imageLink: string,
    heading: string,
    description: string
}

@Component({
  selector: 'app-streaming-info-card',
  standalone: true,
  imports: [],
  templateUrl: './streaming-info-card.component.html',
  styleUrl: './streaming-info-card.component.css'
})
export class StreamingInfoCardComponent {
    @Input()
  cardData!: StreamingCardData;
}
