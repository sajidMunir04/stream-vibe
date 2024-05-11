import { Component } from '@angular/core';
import { BannerData, PromotionalBannerComponent } from '../../shared/promotional-banner/promotional-banner.component';
import { HeaderComponent } from "../../shared/header/header.component";
import { HomebannerComponent } from "../../home/homebanner/homebanner.component";
import { CategoriesSectionComponent } from "../../home/categories-section/categories-section.component";
import { FaqSectionComponent } from "../../shared/faq-section/faq-section.component";
import { StreamingSectionComponent } from "../../home/streaming-section/streaming-section.component";
import { PricingSectionComponent } from "../../shared/pricing-section/pricing-section.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [HeaderComponent, HomebannerComponent, CategoriesSectionComponent, FaqSectionComponent, PromotionalBannerComponent, StreamingSectionComponent, PricingSectionComponent, FooterComponent]
})
export class HomepageComponent {
  bannerData : BannerData ={
    headingText: 'Start your free trial today!',
    descriptionText: 'This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.',
    buttonText: 'Start a Free Trial',
    buttonLink: '#'
  }
}
