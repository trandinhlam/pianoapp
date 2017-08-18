import { Component,Output, EventEmitter, OnInit, HostListener } from '@angular/core';

import { IPianoKey, KeyPadToKeyId, KeyPadToKeyId2, KeyPadToKeyId3 } from './ipiano-key';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})

export class KeyboardComponent implements OnInit {
	@Output() keyPlayed = new EventEmitter<number>();
	// private highlightedKeyId: number = 0;
  private keyType : number = 1;
  KeyPadToKeyId : any[][];
	private pianoKeys : IPianoKey[];

  constructor()
  {
    this.KeyPadToKeyId = new Array<any>();
    this.KeyPadToKeyId[0] = KeyPadToKeyId;
    this.KeyPadToKeyId[1] = KeyPadToKeyId2; 
    this.KeyPadToKeyId[2] = KeyPadToKeyId3; 
  	//init pianokeys
  	this.pianoKeys = [
  		{whiteKeyId :16},
  		{whiteKeyId :18, blackKeyId: 17},
  		{whiteKeyId :20, blackKeyId: 19},
  		{whiteKeyId :21},
  		{whiteKeyId :23, blackKeyId: 22},
  		{whiteKeyId :25, blackKeyId: 24},
  		{whiteKeyId :27, blackKeyId: 26},
  		{whiteKeyId :28},
  		{whiteKeyId :30, blackKeyId: 29},
  		{whiteKeyId :32, blackKeyId: 31},
  		{whiteKeyId :33},
  		{whiteKeyId :35, blackKeyId: 34},
  		{whiteKeyId :37, blackKeyId: 36},
  		{whiteKeyId :39, blackKeyId: 38},
  		{whiteKeyId :40},
  		{whiteKeyId :42, blackKeyId: 41},
  		{whiteKeyId :44, blackKeyId: 43},
  		{whiteKeyId :45},
  		{whiteKeyId :47, blackKeyId: 46},
  		{whiteKeyId :49, blackKeyId: 48},
  		{whiteKeyId :51, blackKeyId: 50},
  		{whiteKeyId :52},
  		{whiteKeyId :54, blackKeyId: 53},
  		{whiteKeyId :56, blackKeyId: 55},
  		{whiteKeyId :57},
  		{whiteKeyId :59, blackKeyId: 58},
  		{whiteKeyId :61, blackKeyId: 60},
  		{whiteKeyId :63, blackKeyId: 62},
  		{whiteKeyId :64}
  	];
  }

  ngOnInit()
  {

  }

  @HostListener('document:keydown', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent): void {
      let keyId = this.getKeyIdFromKeypad(event.key);
      if (keyId <16) return;
      this.keyPress(keyId);
      document.getElementById(""+keyId).setAttribute("style", "background: yellow; ");
      setTimeout(function(){
        document.getElementById(""+keyId).setAttribute("style", "color:white;");
      }
        , 200);   
  }

  private getKeyIdFromKeypad(keypadId) : number
  {
    for (let i=0; i<this.KeyPadToKeyId[this.keyType].length; i++)
    {
      if (this.KeyPadToKeyId[this.keyType][i].KeyPad == keypadId)
      {
        return this.KeyPadToKeyId[this.keyType][i].KeyId;
      }
    }
    return 0;
  }

  keyPress(keyid: number)
  {
  	this.keyPlayed.emit(keyid);
  }

  changeKey()
  {
    this.keyType++;
    if (this.keyType == this.KeyPadToKeyId.length)
    {
      this.keyType = 0;
    }
  }
}
