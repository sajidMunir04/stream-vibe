import { Component, Input } from '@angular/core';

export interface MediaButtonData{
  buttonText: string,
  link: string
}

@Component({
  selector: 'app-red-media-button',
  standalone: true,
  imports: [],
  templateUrl: './red-media-button.component.html',
  styleUrl: './red-media-button.component.css'
})
export class RedMediaButtonComponent {
  @Input()
  buttonData!: MediaButtonData
}
