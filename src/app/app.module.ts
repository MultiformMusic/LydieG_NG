import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test/test.component';

import { reducers } from './app.reducer';
import { LocalizedTextComponent } from './configuration/localized-text/localized-text.component';
import { TimelineComponent } from './ui/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LocalizedTextComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
