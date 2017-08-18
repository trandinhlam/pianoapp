import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PianoMode } from '../core/piano-mode.enum';

@Component({
  selector: 'play-control',
  templateUrl: './play-control.component.html',
  styleUrls: ['./play-control.component.css']
})
export class PlayControlComponent implements OnInit { 
	PianoMode = PianoMode;
	@Input() title: string;
	@Input() mode: PianoMode;
	@Output() modeSelected = new EventEmitter<PianoMode>();

  constructor()
  {

  }

  ngOnInit()
  {
  }

  handlePlayBtnClick()
  {
  	this.mode = PianoMode.Play;
  	this.modeSelected.emit(PianoMode.Play);
  	// console.log(this.modeSelected);
  }

  handleQuizBtnClick()
  {
  	this.mode = PianoMode.Quiz;
  	this.modeSelected.emit(PianoMode.Quiz);
  	// console.log(this.modeSelected);
  }


}
