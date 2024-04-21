import { Component, Input } from '@angular/core';
import { ButtonData } from '../simple-button/simple-button.component';

@Component({
  selector: 'app-colored-button',
  standalone: true,
  imports: [],
  templateUrl: './colored-button.component.html',
  styleUrl: './colored-button.component.css'
})
export class ColoredButtonComponent {
  @Input()
  buttonData!: ButtonData;
}
