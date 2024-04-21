import { Component } from '@angular/core';
import { HeaderData, SectionHeaderComponent } from "../section-header/section-header.component";
import { PriceCardComponent, PriceCardData } from "../price-card/price-card.component";

@Component({
    selector: 'app-pricing-section',
    standalone: true,
    templateUrl: './pricing-section.component.html',
    styleUrl: './pricing-section.component.css',
    imports: [SectionHeaderComponent, PriceCardComponent]
})
export class PricingSectionComponent {
    headerData : HeaderData = {
        heading: 'Choose the plan that\'s right for you',
        description: 'Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!'
    }

    cardOneData: PriceCardData = {
        planName: 'Basic Plan',
        planDescription: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
        planPrice: 9.99
    }

    cardTwoData: PriceCardData = {
        planName: 'Standard Plan',
        planDescription: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
        planPrice: 12.99
    }

    cardThreeData: PriceCardData = {
        planName: 'Premium Plan',
        planDescription: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
        planPrice: 14.99
    }
}
