/**
 * @license
 *
 * MIT License
 *
 * Copyright (c) 2019 Richie Bendall
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * The main cycler class.
 * @class
 */
export class Arcle {
    // Array storage
    public arr: Array<any>;

    // Index storage
    public i = 0;

    /**
     * The main constructor.
     * @constructor
     * @param {array} arr - The array to turn into a cyclable array
     */
    public constructor(arr: Array<any>) {
        this.arr = arr
    }

    /**
     * Cycle to the next value
     * @method
     * @param {number} times - The times to cycle to the next value. Default is 1.
     */
    public cycle(times: number = 1): any {
        this.i = (this.i + times) % this.arr.length
        return this.arr[this.i];
    }

    /**
     * Get the current value
     * @method
     * @param {number} times - Items to jump. Default is 0.
     */
    public val(times: number = 0): any {
        return this.arr[(this.i + times) % this.arr.length];
    }
}
