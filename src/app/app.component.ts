import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertTextComponent } from './components/convert-text/convert-text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConvertTextComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'devtools-prod';
}
