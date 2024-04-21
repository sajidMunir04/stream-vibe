import { Component, Input } from '@angular/core';

export interface HeaderData{
    heading: string,
    description: string
}

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css'
})
export class SectionHeaderComponent {
  @Input()
  headerData!: HeaderData;
}
