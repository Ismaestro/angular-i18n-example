import { ChangeDetectionStrategy, Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { translations } from '../locale/translations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  standalone: true,
})
export class AppComponent {
  content = translations.content;

  constructor(@Inject(LOCALE_ID) public locale: string) {}
}
