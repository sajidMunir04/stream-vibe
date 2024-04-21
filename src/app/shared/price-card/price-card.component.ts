import { Component, Input } from '@angular/core';
import { ButtonData, SimpleButtonComponent } from "../../buttons/simple-button/simple-button.component";
import { ColoredButtonComponent } from "../../buttons/colored-button/colored-button.component";

export interface PriceCardData{
  planName: string,
  planDescription: string,
  planPrice: number
}


@Component({
    selector: 'app-price-card',
    standalone: true,
    templateUrl: './price-card.component.html',
    styleUrl: './price-card.component.css',
    imports: [SimpleButtonComponent, ColoredButtonComponent]
})
export class PriceCardComponent {

  buttonOne : ButtonData = {
    buttonText: 'Start Free Trial',
    buttonLink: '#'
  }
  
  buttonTwo : ButtonData = {
    buttonText: 'Choose Plan',
    buttonLink: '#'
  }

  @Input()
  cardData!: PriceCardData;

}
