import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-remove-dots',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './remove-dots.component.html',
  styleUrl: './remove-dots.component.scss'
})
export class RemoveDotsComponent {
  text: string = '';
  cleanedText: string = '';
  showResult: boolean = false;

  removeDotsText() {
    this.showResult = true;
    this.cleanedText = this.text.replace(/[.,\/\-\s]/g, '');
  }

  cleanText() {
    this.text = '';
    this.cleanedText = '';
    this.showResult = false;
  }

  copyToClipboard() {
    const textToCopy = this.cleanedText;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Texto copiado para a área de transferência!');
      }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
      });
    }
  }
}
