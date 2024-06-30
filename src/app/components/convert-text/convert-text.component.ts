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

  text: string = '';

  convertToUpperCase() {
    this.text = this.text.toUpperCase();
  }

  convertToLowerCase() {
    this.text = this.text.toLowerCase();
  }

  copyToClipboard() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.text).then(() => {
        alert('Texto copiado para a área de transferência!');
      }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
      });
    }
  }
}
