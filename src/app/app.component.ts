import { ValidateCpfComponent } from './components/validate-cpf/validate-cpf.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertTextComponent } from './components/convert-text/convert-text.component';
import { RemoveDotsComponent } from './components/remove-dots/remove-dots.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConvertTextComponent, RemoveDotsComponent,ValidateCpfComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'devtools-prod';
}
