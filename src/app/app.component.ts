import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomebannerComponent } from "./home/homebanner/homebanner.component";
import { CategoriesSectionComponent } from "./home/categories-section/categories-section.component";
import { StreamingSectionComponent } from "./home/streaming-section/streaming-section.component";
import { FaqSectionComponent } from "./shared/faq-section/faq-section.component";
import { PricingSectionComponent } from "./shared/pricing-section/pricing-section.component";
import { BannerData, PromotionalBannerComponent } from "./shared/promotional-banner/promotional-banner.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, HomebannerComponent, CategoriesSectionComponent, StreamingSectionComponent, FaqSectionComponent, PricingSectionComponent, PromotionalBannerComponent, FooterComponent]
})
export class AppComponent {
  title = 'Streaming Service';

  bannerData : BannerData ={
    headingText: 'Start your free trial today!',
    descriptionText: 'This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.',
    buttonText: 'Start a Free Trial',
    buttonLink: '#'
  }
}
