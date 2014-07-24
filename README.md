videojs-loopbutton
==================

A plugin for Video.js that adds a loop button to dynamically switch to loop on and off.

![Screenshot of Loop button](http://sc-cdn.scaleengine.net/i/bdfa16b2d292079018d23d4b34c45f81.png)

Usage
=====
1) a) Upload files to webspace (if needed)
   b) Include script and stylesheet into page
`<script src="videojs.loopbutton.js"></script>`
`<link rel='stylesheet' type='text/css' href='videojs.loopbutton.css' />`

2) Activate the plugin by adding it to the videojs object
`videojs('videoid', { plugins: {
    loopbutton: true
  }
});`
