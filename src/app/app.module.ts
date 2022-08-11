import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MediaComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
