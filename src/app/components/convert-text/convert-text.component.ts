import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-convert-text',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './convert-text.component.html',
  styleUrl: './convert-text.component.scss'
})
export class ConvertTextComponent {

  showResult: boolean = false;
  cleanedText: string = '';
  text: string = '';

  convertToUpperCase() {
    this.showResult = true;
    this.cleanedText = this.text.toUpperCase();
  }

  convertToLowerCase() {
    this.showResult = true;
    this.cleanedText = this.text.toLowerCase();
  }

  removeAccents() {
    this.showResult = true;
    this.cleanedText = this.text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleUpperCase();
  }

  copyToClipboard() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.cleanedText).then(() => {
        alert('Texto copiado para a área de transferência!');
      }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
      });
    }
  }
}
