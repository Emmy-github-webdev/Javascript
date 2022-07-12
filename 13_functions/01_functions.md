# FUNCTIONS

A function is a group of reusable code which can be called anywhere in your
program. This eliminates the need of writing the same code again and again. It
helps programmers in writing modular codes. Functions allow a programmer to
divide a big program into a number of small and manageable functions.

#### Function Definition
```
<script type="text/javascript">
<!--
function functionname(parameter-list)
{
 statements
}
//-->
</script>

```

#### The return Statement

A JavaScript function can have an optional return statement. This is required if
you want to return a value from a function. This statement should be the last
statement in a function.

#### Function () Constructor

The function statement is not the only way to define a new function; you can
define your function dynamically using Function() constructor along with the
new operator.

<br>

Note: Constructor is a terminology from Object Oriented Programming. You may
not feel comfortable for the first time, which is OK.
```
<script type="text/javascript">
<!--
var variablename = new Function(Arg1, Arg2..., "Function Body");
//-->
</script>
```

#### Function Literals

JavaScript 1.2 introduces the concept of **function literals** which is another new
way of defining functions. A function literal is an expression that defines an
unnamed function.

```
<script type="text/javascript">
var variablename = function(Argument List){
 Function Body
 };
</script>

```

Syntactically, you can specify a function name while creating a literal function as
follows.

```
<script type="text/javascript">
<!--
var variablename = function FunctionName(Argument List){
 Function Body
 };
//-->
</script>
```

Example

```
<script type="text/javascript">
<!--
var func = function(x,y){ return x*y };
function secondFunction(){
 var result;
 result = func(10,20);
 document.write ( result );
}
//-->
</script>

```
