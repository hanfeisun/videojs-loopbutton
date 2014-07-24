/* ! Loopbutton v1.0.0 Copyright 2014 Charlotte Dunois https://github.com/CharlotteDunois/videojs-loopbutton/blob/master/LICENSE.md ! */
videojs.plugin('loopbutton', function(options) {
	var player = this;
	
	var LoopButton = vjs.Button.extend({
		init: function(player, options) {
			vjs.Button.call(this, player, options);
		}
    });
	
	LoopButton.prototype.buttonText = 'Loop';

    LoopButton.prototype.buildCSSClass = function() {
		return 'vjs-loop-button vjs-menu-button';
    };

    LoopButton.prototype.onClick = function(e){
		if(player.options_['loop'] == true) {
			player.options_['loop'] = false;
			this.removeClass('vjs-control-active');
		} else {
			player.options_['loop'] = true;
			this.addClass('vjs-control-active');
		}
    };

    player.ready(function(){
		var button = new LoopButton(player);
		player.controlBar.addChild(button);
		
		player.on('ended', function() {
			if(player.options_['loop'] == true) {
				player.play();
			}
		});
	});
});
