import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  words: string[] = ['computer engineer.', 'web Developer', 'Freelancer'];
  displayedText: string = '';
  currentWordIndex: number = 0;
  letterIndex: number = 0;
  typingSpeed: number = 150; // Vitesse de frappe

  constructor() { }

  ngOnInit(): void {
    this.typeWords();
  }

  typeWords() {
    const currentWord = this.words[this.currentWordIndex];
    
    if (this.letterIndex < currentWord.length) {
      this.displayedText += currentWord.charAt(this.letterIndex);
      this.letterIndex++;
      setTimeout(() => this.typeWords(), this.typingSpeed);
    } else {
      setTimeout(() => this.deleteWord(), 2000); // Pause avant de supprimer
    }
  }

  deleteWord() {
    if (this.letterIndex > 0) {
      this.displayedText = this.displayedText.substring(0, this.letterIndex - 1);
      this.letterIndex--;
      setTimeout(() => this.deleteWord(), this.typingSpeed / 2); // Suppression plus rapide
    } else {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      setTimeout(() => this.typeWords(), 500); // Pause avant de taper le nouveau mot
    }
  }
}