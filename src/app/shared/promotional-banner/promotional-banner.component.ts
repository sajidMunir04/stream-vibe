import { Component, Input } from '@angular/core';
import { ColoredButtonComponent } from "../../buttons/colored-button/colored-button.component";
import { ButtonData } from '../../buttons/simple-button/simple-button.component';

export interface BannerData {
    headingText: string,
    descriptionText: string
}

@Component({
    selector: 'app-promotional-banner',
    standalone: true,
    templateUrl: './promotional-banner.component.html',
    styleUrl: './promotional-banner.component.css',
    imports: [ColoredButtonComponent]
})
export class PromotionalBannerComponent {
    buttonData : ButtonData = {
        buttonText: 'Start a Free Trial',
        buttonLink: '#'
    }

    @Input()
    bannerData!: BannerData;
}
