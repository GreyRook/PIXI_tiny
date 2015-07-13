# PIXI_tiny

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
