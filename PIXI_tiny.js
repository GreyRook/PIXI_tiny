/**
 * Tiny API for PIXI.Graphics.prototype.moveTo
 *
 * @param {number} x - x-coordinate to move to
 * @param {number} y - y-coordinate to move to
 * @returns {object} - The PIXI.Graphics object
 */
PIXI.Graphics.prototype.mt = function (x, y) {
    this.moveTo(x, y);
    return this;
};

/**
 * Tiny API to set linewidth
 *
 * @param {number} linewidth - The desired line width in pixel
 * @returns {object} - The PIXI.Graphics object
 */
PIXI.Graphics.prototype.ss = function (linewidth) {
    this.setStrokeStyle(linewidth);
    return this;
};

/**
 * Function to connect setStrokeStyle to PIXI.Graphics.prototype.lineStyle. Sets line width and color.
 *
 * @param {number} linewidth - The desired line width in pixel
 * @param {number} color - The color of the line to draw
 * @returns {object} - The PIXI.Graphics object
 */
PIXI.Graphics.prototype.setStrokeStyle = function (linewidth, color) {
    linewidth = linewidth || this.lineWidth;
    color = color || this.lineColor;
    this.lineStyle(linewidth, color, this.lineAlpha);
    return this;
};

/**
 * Tiny API to set color of lineStyle
 *
 * @param {number} color - The color of the line to draw
 * @returns {object} - The PIXI.Graphics object
 */
PIXI.Graphics.prototype.s = function (color) {
    this.setStrokeStyle(null, color);
    return this;
};

/**
 * Tiny API to draw an ellipse. Calls PIXI.Graphics.prototype.drawEllipse
 *
 * @param {number} x - The x-coordinate to start the ellipse
 * @param {number} y - The y-coordinate to start the ellipse
 * @param {number} width - The width of the ellipse in pixel
 * @param {number} height - The height of the ellipse in pixel
 * @returns {object} - The PIXI.Graphics object
 */
PIXI.Graphics.prototype.de = function (x, y, width, height) {
    this.drawEllipse(x, y, width, height);
    return this;
};

/**
 * Shortcut for PIXI.Graphics.prototype.drawRect
 *
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @returns {object} - The PIXI.Graphics object
 */
PIXI.Graphics.prototype.rect = function (x, y, w, h) {
    this.drawRect(x, y, w, h);
    return this;
};

/**
 * Tiny API for endStroke
 *
 * @returns {object} - The PIXI.Graphics object
 */
PIXI.Graphics.prototype.es = function () {
    return this.endStroke();
};

/**
 * Doesn't exist in PIXI, so just return the current Graphics object
 *
 * @returns {object} - The PIXI.Graphics object
 */
PIXI.Graphics.prototype.endStroke = function () {
    return this;
};

/**
 * Tiny API for PIXI.Graphics.prototype.beginFill
 *
 * @param {number} color
 * @param {number} alpha
 * @returns {object} - The PIXI.Graphics object
 */
PIXI.Graphics.prototype.f = function (color, alpha) {
    if (alpha == null) {
        alpha = 1;
    }
    this.beginFill(color, alpha);
    return this;
};

/**
 * Tiny API for PIXI.Graphics.prototype.endFill
 *
 * @returns {object} - The PIXI.Graphics object
 */
PIXI.Graphics.prototype.ef = function () {
    this.endFill();
    return this;
};

/**
 * Tiny API for PIXI.Graphics.prototype.drawRect
 *
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @returns {object} - The PIXI.Graphics object
 */
PIXI.Graphics.prototype.r = function (x, y, w, h) {
    this.drawRect(x, y, w, h);
    return this;
};

/**
 * Alternate Tiny API for PIXI.Graphics.prototype.drawRect
 *
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @returns {object} - The PIXI.Graphics object
 */
PIXI.Graphics.prototype.dr = function (x, y, w, h) {
    this.drawRect(x, y, w, h);
    return this;
};

PIXI.Graphics.prototype.closePath = function () {
    return this;
};

PIXI.Graphics.prototype.cp = function () {
    this.closePath();
    return this;
};

PIXI.Graphics.BASE64 = {"A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6, "H": 7, "I": 8, "J": 9, "K": 10, "L": 11, "M": 12, "N": 13, "O": 14, "P": 15, "Q": 16, "R": 17, "S": 18, "T": 19, "U": 20, "V": 21, "W": 22, "X": 23, "Y": 24, "Z": 25, "a": 26, "b": 27, "c": 28, "d": 29, "e": 30, "f": 31, "g": 32, "h": 33, "i": 34, "j": 35, "k": 36, "l": 37, "m": 38, "n": 39, "o": 40, "p": 41, "q": 42, "r": 43, "s": 44, "t": 45, "u": 46, "v": 47, "w": 48, "x": 49, "y": 50, "z": 51, "0": 52, "1": 53, "2": 54, "3": 55, "4": 56, "5": 57, "6": 58, "7": 59, "8": 60, "9": 61, "+": 62, "/": 63};

PIXI.Graphics.prototype.p = function(str) {
    return this.decodePath(str);
};

PIXI.Graphics.prototype.decodePath = function (str) {
    var instructions = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath];
    var paramCount = [2, 2, 4, 6, 0];
    var i = 0, l = str.length;
    var params = [];
    var x = 0, y = 0;
    var base64 = PIXI.Graphics.BASE64;

    while (i < l) {
        var c = str.charAt(i);
        var n = base64[c];
        var fi = n >> 3; // highest order bits 1-3 code for operation.
        var f = instructions[fi];
        // check that we have a valid instruction & that the unused bits are empty:
        if (!f || (n & 3)) {
            throw("bad path data (@" + i + "): " + c);
        }
        var pl = paramCount[fi];
        if (!fi) {
            x = y = 0;
        } // move operations reset the position.
        params.length = 0;
        i++;
        var charCount = (n >> 2 & 1) + 2;  // 4th header bit indicates number size for this operation.
        for (var p = 0; p < pl; p++) {
            var num = base64[str.charAt(i)];
            var sign = (num >> 5) ? -1 : 1;
            num = ((num & 31) << 6) | (base64[str.charAt(i + 1)]);
            if (charCount == 3) {
                num = (num << 6) | (base64[str.charAt(i + 2)]);
            }
            num = sign * num / 10;
            if (p % 2) {
                x = (num += x);
            }
            else {
                y = (num += y);
            }
            params[p] = num;
            i += charCount;
        }
        f.apply(this, params);
    }
    return this;
};