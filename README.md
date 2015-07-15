![PIXI_tyine](/docs/example_2.png)

easel.js graphics [tiny API](http://www.createjs.com/docs/easeljs/classes/Graphics.html) for [PIXI.js](http://www.pixijs.com/).

# Example

```javascript
    // draw simple rect
    var gr = new PIXI.Graphics();
    gr.f(0x000000).r(50, 50, 100, 100).ef();
    stage.addChild(gr);

    // draw simple line
    gr = new PIXI.Graphics();
    gr.ss(2).s(0xffbbbb).mt(200, 50).lt(300, 150);
    stage.addChild(gr);
```

![Screenshot of example 1](/docs/example_1.png)

[Full source code](https://github.com/GreyRook/PIXI_tiny/blob/master/examples/example%201%20-%20basic/index.html)

The logo is actually rendered in pixi using:
```javascript
    graphics.f(0x101228).p('EAAAAAAcAAAAAAAaQAAAAAAAAAcAAAAAAAAAAKoAAAAAAcAAAAAAgaQAAAAAAAAAcAAAAAAAAAgKoAAAAAA').ef().f(0xffffff).p('EAWjAEtcAAAAAAgAmAB0AAAAAAcgASAA2gAOAAcgASAATcgAQAAPgAQAAGgAKAAAcAAAAAAgALgAlAAAAAAcAAGgACAAJgAFAAGgAFcAAPgAKAAGgARAAAgACcAAAgACgABgACgAAgADcAAAAAAgA4gCZAAAAAAcAAAAAAAAwAAAAAAAAAcAAAAAAAAZABWAAAAAAcAADAAKAADAAMAABAAIcAAAAAAAABAAAAAAAAAcAABgAJAADgALAABgAKcAAAAAAAAVgBXAAAAAAcAAAAAAAAuAAAAAAAAAcAAAAAAAAAAABAAAAAA').ef().f(0xffffff).p('EAUGAHTcAAAAAAgAsAAAAAAAAAcAAAAAAAAAgBhAAAAAAcAAAgAUgAGgARgASAAAcgALAAAgAQAAJAAAAAZcAAAAAAAAAABiAAAAAAcAAAAAAgAsAAAAAAAAAcAAAAAAAAAgBzAAAAAAcAAAgAUgAAgAPAAAgAPcAAAAAAAAmAAAAAAAAAcAAAAAAAABAAWAAAAAAcAAAAAAAAAAAAAAAAAAcAAIgAMAAPgANAAYAAAcAAeAAAAAWAAVAAAAAvcAAAAAAAAAABmAAAAAAcAAAAAAgAAAAAAAAAAA').ef().f(0xffffff).p('EAPjAEOcAAAAAAAAsgAMAAAAAAcAAAAAAAAAAAqAAAAAAcAAAAAAAAkAAAAAAAAAcAAAAAAAAAAAgAAAAAAcAAAAAAgAkAAAAAAAAAcAAAAAAAAAABIAAAAAAcAAAAAUAAFAAHAAOAAAcAAFAAAAAEgAAAAEAAAcAAAAAAAAAAAiAAAAAAcgAFAACgAKAACgANAAAcgAwAAAgAAgAqAAAgARcAAAAAAAAAgBNAAAAAAcAAAAAAgAVAAAAAAAAAcAAAAAAAAAgAgAAAAAAcAAAAAAAAVAAAAAAAAAcAAAAAAAAAgAfAAAAAA').ef().f(0xd90057).p('EAOeAG6cAAAgAPAAKgAMAAPAAAcAAPAAAAAKAAKAAAAARcAAAAARgAKAAMgAQAAAcgAQAAAgAKgAMAAAgAQ').ef().f(0xd90057).p('EANJADJcAAAAAAgBQACAAAAAAAcAAAAAAABQACJAAAAAAcAAAAAAgBQAAAAAAAAAcAAAAAAgAZgA0AAAAAAcgAGgAOgAGgANgAGgAOcAAAAAAgAAAAAAAAAAAcgAFAAOgAHAANgAGAAOcAAAAAAgAZAA0AAAAAAcAAAAAAgBLAAAAAAAAAcAAAAAAABQgCHAAAAAAcAAAAAAgBPgCEAAAAAAcAAAAAAABPAAAAAAAAAcAAAAAAAAZAAvAAAAAAcAAIAAPAAFAANAAGAANcAAAAAAAAAAAAAAAAAAcAAGgANAAGgAPAAGgANcAAAAAAAAYgAvAAAAAAcAAAAAAABLAAAAAAAAAcAAAAAAAAAAABAAAAAA').ef().f(0xd90057).p('EAFPAFocAAAAAnAAYAASAAXAAAcAAjAAAAATgAjAAAgAvcAAAgAvgARgAigAjAAAcgAbAAAgAWAAaAAAAAfcAAAAAAAAAAAyAAAAAAcAAAAAAgAAAAAAAAAAA').ef().f(0xd90057).p('EAFJADtcAARgAbAAbgAPAAiAAAcAA7AAAAAqAA3AAAABScAAAABhgA3AAsgA2AAAcgAdAAAgAWgAMgAKgARcAAAAAAgAAAAAAAAAAAcAAAAAAAAAACEAAAAAAcAAAAAAgBHAAAAAAAAAcAAAAAAAAAgEgAAAAAAcAAAgAjgABgAbgABgAYcAAAAAAAA9AAAAAAAAAcAAAAAAAADAAkAAAAAAcAAAAAAAAAAAAAAAAAA').ef().f(0xffffff).p('EARmAHTcAAAAAAgAsAAAAAAAAAcAAAAAAAAAgCmAAAAAAcAAAAAAAAsAAAAAAAAAcAAAAAAAAAACmAAAAAA').ef().f(0xffffff).p('EARQAEWcgAOAAAgAKgAKAAAgANcAAAgANAAKgAKAAOAAAcAAOAAAAAKAAKAAAAANcAAAAAPgAKAAIgAOAAA').ef().f(0xd90057).p('EAOSAHTcAAAAAAgBGAAAAAAAAAcAAAAAAAAAgEKAAAAAAcAAAAAAABGAAAAAAAAAcAAAAAAAAAAEKAAAAAA').ef().f(0xd90057).p('EANuAClcgAXAAAgAPgAQAAAgAVcAAAgAVAAPgAQAAWAAAcAAXAAAAAPAAQAAAAAVcgAAAAYgAPAANgAVAAA').ef().f(0xd90057).p('EAJTAHTcAAAAAAgBGAAAAAAAAAcAAAAAAAAAgEKAAAAAAcAAAAAAABGAAAAAAAAAcAAAAAAAAAAEKAAAAAA').ef().f(0xd90057).p('EAIwAClcgAWAAAgAPgAQAAAgAVcAAAgAVAAPgAQAAWAAAcAAWAAAAAPAAQAAAAAVcAAAAAYgAPAANgAWAAA').ef().f(0x101228).p('EAFQAFocAAAAAnAAXAASAAXAAAcAAjAAAAATgAjAAAgAvcAAAgAvgARgAigAjAAAcgAbAAAgAWAAaAAAAAfcAAAAAAAAAAAyAAAAAAcAAAAAAAAAAAAAAAAAA').ef().cp();
```
The code was generated from with [Draw2Script](https://github.com/GreyRook/Draw2Script) in Adobe Illustrator.
