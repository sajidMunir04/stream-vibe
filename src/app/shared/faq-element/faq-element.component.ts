import { Component, Input } from '@angular/core';

export interface QuestionData{
  index: string,
  question: string,
  answer: string
}

@Component({
  selector: 'app-faq-element',
  standalone: true,
  imports: [],
  templateUrl: './faq-element.component.html',
  styleUrl: './faq-element.component.css'
})
export class FaqElementComponent {
    @Input()
  questionData!: QuestionData;
}
