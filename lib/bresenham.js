/*
 * Copyright (c) 2016, Tim Leerhoff <tleerhof@web.de>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Calculates a line calling the callback for each point.
 * Taken and converted from https://de.wikipedia.org/wiki/Bresenham-Algorithmus
 * @param {type} x0
 * @param {type} y0
 * @param {type} x1
 * @param {type} y1
 * @param {type} callback
 * @returns {undefined}
 */
module.exports.calculateLine = function (x0, y0, x1, y1, callback) {
    var dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
    var dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
    var err = dx + dy, e2; /* error value e_xy */

    while (1) {
        callback(x0, y0);
        
        if (x0 === x1 && y0 === y1)
            break;
        
        e2 = 2 * err;
        
        if (e2 > dy) {  /* e_xy+e_x > 0 */
            err += dy;
            x0 += sx;
        }
        
        if (e2 < dx) { /* e_xy+e_y < 0 */
            err += dx;
            y0 += sy;
        } 
    }
};
