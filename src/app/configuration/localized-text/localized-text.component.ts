import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import { getLocalizeText } from '../../helpers/helpersFunctions';

@Component({
  selector: 'app-localized-text',
  templateUrl: './localized-text.component.html',
  styleUrls: ['./localized-text.component.scss']
})
export class LocalizedTextComponent implements OnInit {

  @Input() text: string;
  private localizedText: string;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    
    this.store.select(fromRoot.getLanguage).subscribe(
      (language: string) => this.localizedText = getLocalizeText(language, this.text)
    );
  }
}
