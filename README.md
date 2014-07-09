## Totes.js - Chainable, expandable assertion library for javascript

![travis badge](https://travis-ci.org/z3roshot/totes.svg?branch=master)

### Install

`npm install totes`

### Usage

`var expect = require('totes');`

expect wraps the value in an Assertable object

`var assertable = expect(testExpression);`

Assertable objects have several assertion functions available

```javascript
assertable.isTruthy();
assertable.is(expressionToTestAgainstValue);
assertable.isExactly(expressionToTestAgainstValueAndType);
```

If any assertion fails, it will throw an AssertionError which will be detected by test runners including [mocha](https://github.com/visionmedia/mocha)

#### Chaining

You can chain assertions for more terse syntax

```
expect(testExpression)
    .isTruthy()
    .is(someOtherExpression)
    .isExactly(aThirdExpression);
```

#### Expanding

Since totes has a small core centered around the Assertable object, you can write your own assertions by extending the Assertable prototype.

```javascript
var Assertable = require('totes');

Assertable.prototype.isHelloString = function(){
  // you can access the internal value with this.value
  
  if(typeof(this.value) !== 'string' || this.value !== 'Hello!'){
    throw AssertionError();
  }
  
  return this;
}
```

*Note: always `return this;` at the end of your new assertions or it will break chaining.*

## License

Copyright (c) 2014 Christopher Gillis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Text for license retrieved from http://opensource.org/licenses/MIT
