import { Component } from '@angular/core';
import { HeaderData, SectionHeaderComponent } from '../section-header/section-header.component';
import { FaqElementComponent, QuestionData } from "../faq-element/faq-element.component";

@Component({
    selector: 'app-faq-section',
    standalone: true,
    templateUrl: './faq-section.component.html',
    styleUrl: './faq-section.component.css',
    imports: [SectionHeaderComponent, FaqElementComponent]
})
export class FaqSectionComponent {
    headerData : HeaderData ={
      heading: 'Frequently Asked Questions',
      description: 'Got questions? We\'ve got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.'
    }

    questionOne : QuestionData = {
      index: '01',
      question: 'What is StreamVibe?',
      answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
    }
    questionTwo : QuestionData = {
      index: '02',
      question: 'What is StreamVibe?',
      answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
    }
    questionThree : QuestionData = {
      index: '03',
      question: 'What is StreamVibe?',
      answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
    }
    questionFour : QuestionData = {
      index: '04',
      question: 'What is StreamVibe?',
      answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
    }
    questionFive : QuestionData = {
      index: '05',
      question: 'What is StreamVibe?',
      answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
    }
    questionSix : QuestionData = {
      index: '06',
      question: 'What is StreamVibe?',
      answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
    }
    questionSeven : QuestionData = {
      index: '07',
      question: 'What is StreamVibe?',
      answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
    }
    questionEight : QuestionData = {
      index: '08',
      question: 'What is StreamVibe?',
      answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
    }
}
