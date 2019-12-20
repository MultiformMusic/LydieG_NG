import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as configActions from './configuration/ngrx/config.actions';
import * as fromRoot from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'LydiL';

  language: string = navigator.language;

  constructor(private store: Store<fromRoot.State>) {}

  toggleLanguage() {

    if (this.language === 'fr') {
      this.language = 'en';
    } else {
      this.language = 'fr';
    }

    this.store.dispatch(new configActions.setLanguage(this.language));
  }
}
