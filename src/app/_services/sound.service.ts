import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {
	private context: AudioContext;
	protected buffers: {} = {};

	constructor()
	{
		//load wav files for each piano key
		//Hack to support AudioContext on iOS
		try 
		{
			// Hack to support AudioContext on iOS
	  		if (typeof AudioContext !== 'undefined') {
			  	this.context = new AudioContext();
			} else if (typeof (window as any).webkitAudioContext !== 'undefined') {
		    	this.context = new (window as any).webkitAudioContext();
			}
		  	this.loadSounds();
	  	}
	  	catch(e)
	  	{
	   		alert("Web Audio API is not supported in this browser");
	 	}
	}

	playNode(keyId: number)
	{
		// console.log(this.buffers);
		if (keyId < 16 || keyId > 64)
		{
			new RangeError("invalid keyId 16 - 64");
		}	
		if (this.buffers.hasOwnProperty(keyId))
		{
			let source = this.context.createBufferSource();
        	source.buffer = this.buffers[keyId];
        	source.connect(this.context.destination);
        	source.start(0);
		}
		else
		{
			console.log("Audio not loaded for key=" + keyId);
		}
	}

	private loadSounds()
	{
		for(let i=16; i<65 ; i++)
		{
			var soundPath = `./assets/sounds/${i}.wav`;
			this.loadBuffer(i.toString(), soundPath);
		}
	}

	private loadBuffer(name: string, path: string) : void {

	    var request = new XMLHttpRequest();
	    request.open("GET", path, true);
	    request.responseType = "arraybuffer";

	    let context = this.context;
	    let buffers = this.buffers;

	    request.onload = function() {
	      context.decodeAudioData(
	        request.response,
	        function(buffer) {
	            if (!buffer) {
	              alert('error decoding file data: ' + path);
	              return;
	            }
	            buffers[name] = buffer;
	        },
	        function(error) {
	            console.error('decodeAudioData error', error);
	        }
	      );
	    }
	    request.onerror = function() {
	      alert('BufferLoader: XHR error');
	    }
	    request.send();
  }

}
