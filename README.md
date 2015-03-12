# varstr
Variable width parser.

##**To use:**

+ Define a transformer with a variable delimiter (in this case, '~')
```javascript
var vs = require('varstr');
var transformer = vs('~', [
  vs.str('foo'),
  vs.str('bar'),
  vs.number('baz')
]);
```

+ Objectifiy or Stringify as needed
```javascript
transformer.objectify('F~Bar~3');
// => { foo: 'F', bar: 'Bar', baz: 3}

transformer.stringify({ foo: 'F', bar: 'Bar', baz: 3});
// => 'F~Bar~3'
```
