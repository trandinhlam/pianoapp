import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule} from 'bootstrap';
import { AppComponent } from './app.component';
import { PlayControlComponent } from './play-control/play-control.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

import { SoundService } from './_services/index';
import { NoteInfoComponent } from './note-info/note-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayControlComponent,
    KeyboardComponent,
    NoteInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SoundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
