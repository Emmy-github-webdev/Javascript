# NUMBER 

The Number object represents numerical date, either integers or floating-point numbers. In general, you do not need to worry about Number objects because the browser automatically converts number literals to instances of the number class.

```
var val = new Number(number);
```

In the place of number, if you provide any non-number argument, then the
argument cannot be converted into a number, it returns NaN (Not-a-Number).

#### Number Properties

| Property | Description |
| -------- | ---------- |
|MAX_VALUE  | The largest possible value a number in JavaScript can have 1.7976931348623157E+308 |
| MIN_VALUE  | The smallest possible value a number in JavaScript can have 5E-324 |
| NaN | Equal to a value that is not a number. |
| NEGATIVE_INFINITY | A value that is less than MIN_VALUE. |
| POSITIVE_INFINITY | A value that is greater than MAX_VALUE |
| prototype | A static property of the Number object. Use the prototype property to assign new properties and methods to the Number object in the current document |
| constructor | Returns the function that created this object's instance. By default this is the Number object. |


