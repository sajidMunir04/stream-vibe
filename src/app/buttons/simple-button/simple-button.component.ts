import { Component, Input } from '@angular/core';

export interface ButtonData{
  buttonText: string,
  buttonLink: string
}

@Component({
  selector: 'app-simple-button',
  standalone: true,
  imports: [],
  templateUrl: './simple-button.component.html',
  styleUrl: './simple-button.component.css'
})
export class SimpleButtonComponent {
  @Input()
  buttonData!: ButtonData;
}
