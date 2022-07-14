## JavaScript Syntax

Javascript can be implemented by placing javascript statement within the <script> ...</script> HTML tags in the web page.

<br>

The script tag consists of two attributes
1. Language which specifies what scripting language you are using.
2. Type which is what is now recommended to indicate the scripting
language in use and its value should be set to "text/javascript"

#### Whitespace and Line Breaks

JavaScript ignores spaces, tabs, and newlines that appear in JavaScript programs.
You can use spaces, tabs, and newlines freely in your program and you are free to
format and indent your programs in a neat and consistent way that makes the code
easy to read and understand.

#### Semicolons are Optiona

Simple statements in JavaScript are generally followed by a semicolon character, just
as they are in C, C++, and Java. JavaScript, however, allows you to omit this
semicolon if each of your statements are placed on a separate line. For example, the
following code could be written without semicolons.

```
<script language="javascript" type="text/javascript">
<!--
 var1 = 10
 var2 = 20
//-->
</script>
```

But when formatted in a single line as follows, you must use semicolons:
```
<script language="javascript" type="text/javascript">
<!--
var1 = 10; var2 = 20;
//-->
</script>

```