# OBJECTS

JavaScript is an Object Oriented Programming (OOP) language. A programming language can be called object-oriented if it provides four basic capabilities to developers:
- **Encapsulation:** the capability to store related information, whether data or methods, together in an object.
- **Aggregation:** the capability to store one object inside another object.
- **Inheritance:** the capability of a class to rely upon another class (or number of classes) for some of its properties and methods.
- **Polymorphism:** the capability to write one function or method that works in a variety of different ways.

### Object Methods
Methods are the functions that let the object do something or let something be
done to it. There is a small difference between a function and a method – at a
function is a standalone unit of statements and a method is attached to an
object and can be referenced by the **this** keyword.

<br>

Methods are useful for everything from displaying the contents of the object to
the screen to performing complex mathematical operations on a group of local
properties and parameters.

### User-Defined Objects
All user-defined objects and built-in objects are descendants of an object called **Object**.

<br>

#### The new Operator

The new operator is used to create an instance of an object. To create an object, the new operator is followed by the constructor method.
In the following example, the constructor methods are Object(), Array(), and Date(). These constructors are built-in JavaScript functions.
```
var employee = new Object();
var books = new Array("C++", "Perl", "Java");
var day = new Date("August 15, 1947");

```
#### The Object()Constructor
A constructor is a function that creates and initializes an object. JavaScript provides a special constructor function called **Object()** to build the object. The return value of the **Object()** constructor is assigned to a variable. The variable contains a reference to the new object. The properties assigned to the object are not variables and are not defined with the **var** keyword.
