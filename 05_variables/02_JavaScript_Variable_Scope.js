/*
 * JavaScript Variable Scope
  The scope of a variable is the region the variable is defined within your program. In Javascript we have
  1. Global Variable which has global scope which means it can be defined anywhere within the javascript code.
  2. Local variable which has local scope which means that it can only be visible within the function it is defined.

  Within the body of a function, a local variable takes precedence over a global
  variable with the same name. If you declare a local variable or function
  parameter with the same name as a global variable, you effectively hide the
  global variable.
*/

<script type="text/javascript">
  var myVar = "global"; //global scope

  function checkScope() {
    
    var myVar = "local"; //Local scope
    document.write(myVar);

    // This will produce the following result: local
  }
</script>