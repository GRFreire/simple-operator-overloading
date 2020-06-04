# simple-operator-overloading

A simple function that replaces `operator-overloading` in JS

## Install
Using NPM:
 - `npm install simple-operator-overloading --save`

Using Yarn:
 - `yarn add simple-operator-overloading`

## Usage

### Using the operator

 - Import the package on top of all `operator-overloading/global` functionality in your code. You can also require it on specific parts of your project by removing `/global` when importing.
 ---
*Global*
 ```js
 require('operator-overloading/global');
 ```

*Local*
 ```js
 const $ = require('operator-overloading');
 ```
 ---
 - To use the operator, call the function `$` with three arguments, `(a, OP, b)`.

### Creating the operator functions

 - In your class, define your operators as a function.

### Example (importing globally)

Your code
```js
require('simple-operator-overloading/global');

const Vector = require('./Vector');

const Player = new Vector(5, 10);
const Enemie = new Vector(10, 5);

const Target = new Vector(0, 0);

const PlayerDistance = $(Target, '-', Player);
const EnemieDistance = $(Target, '-', Enemie);

if ($(EnemieDistance, '<', PlayerDistance)) console.log('Run faster!');
else if ($(EnemieDistance, '===', PlayerDistance)) console.log('Keep going!');
else console.log('Relax...');
```

Your class
```js
class Vector {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    '+'(other) {
        const result = new Vector();
        result.x = this.x + other.x;
        result.y = this.y + other.y;
        return result;
    }

    '-'(other) {
        const result = new Vector();
        result.x = this.x - other.x;
        result.y = this.y - other.y;
        return result;
    }

    '<'(other) {
        const thisMag = Math.pow(this.x, 2) + Math.pow(this.y, 2);
        const otherMag = Math.pow(other.x, 2) + Math.pow(other.y, 2);
        return thisMag < otherMag;
    }

    '>'(other) {
        const thisMag = Math.pow(this.x, 2) + Math.pow(this.y, 2);
        const otherMag = Math.pow(other.x, 2) + Math.pow(other.y, 2);
        return thisMag > otherMag;
    }

    '=='(other) {
        const thisMag = Math.pow(this.x, 2) + Math.pow(this.y, 2);
        const otherMag = Math.pow(other.x, 2) + Math.pow(other.y, 2);
        return thisMag == otherMag;
    }

    '===' = this['==']
}
```