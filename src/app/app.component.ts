import { Component } from '@angular/core';

import { PianoMode } from './core/piano-mode.enum';
import { SoundService } from './_services/sound.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano-app';
  // mode: 'play';

  constructor(
  		private soundService: SoundService
  	)
  {
  }

  handleKeyPlayed(keyId: number)
  {
  	this.soundService.playNode(keyId);
  }
}
