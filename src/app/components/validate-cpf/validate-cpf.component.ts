import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-validate-cpf',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './validate-cpf.component.html',
  styleUrl: './validate-cpf.component.scss',
})
export class ValidateCpfComponent {
  cpf: string = '';
  isValid: boolean | null = null;
  validationMessage: string = '';

  validateCPF() {
    // Remove pontos, traços e barras do CPF
    const cleanCPF = this.cpf.replace(/[.\-\/]/g, '');

    // Verifica se tem 11 dígitos numéricos
    if (cleanCPF.length !== 11 || !/^\d+$/.test(cleanCPF)) {
      this.isValid = false;
      this.validationMessage = 'CPF inválido. Deve conter 11 dígitos numéricos.';
      return;
    }

    // Verifica CPFs com todos os dígitos iguais (invalidação)
    const invalidCPFs = [
      '00000000000', '11111111111', '22222222222', '33333333333',
      '44444444444', '55555555555', '66666666666', '77777777777',
      '88888888888', '99999999999'
    ];

    if (invalidCPFs.includes(cleanCPF)) {
      this.isValid = false;
      this.validationMessage = 'CPF inválido.';
      return;
    }

    // Função para calcular dígito verificador
    const calculateDigit = (cpfArray: number[], factor: number): number => {
      const total = cpfArray.reduce((acc, num, index) => acc + num * (factor - index), 0);
      const remainder = total % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };

    // Converte o CPF em um array de números
    const cpfArray = cleanCPF.split('').map(digit => parseInt(digit, 10));

    // Calcula o primeiro e o segundo dígito verificador
    const firstDigit = calculateDigit(cpfArray.slice(0, 9), 10);
    const secondDigit = calculateDigit(cpfArray.slice(0, 10), 11);

    // Verifica se os dígitos calculados coincidem com os dígitos fornecidos
    this.isValid = firstDigit === cpfArray[9] && secondDigit === cpfArray[10];
    this.validationMessage = this.isValid ? 'CPF válido!' : 'CPF inválido.';
  }

  cleanText() {
    this.validationMessage = '';
    this.cpf = '';
  }
}
