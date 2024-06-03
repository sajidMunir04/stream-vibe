import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface QuestionData{
  index: string,
  question: string,
  answer: string
}

const onButtonClick = () => {

}

@Component({
  selector: 'app-faq-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-element.component.html',
  styleUrl: './faq-element.component.css'
})
export class FaqElementComponent {
    @Input()
  questionData!: QuestionData;
  isClicked : boolean = false;
  handleClick() {
    this.isClicked = !this.isClicked;
  }
}
