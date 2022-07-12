# EVENTS 

JavaScript's interaction with HTML is handled through events that occur when
the user or the browser manipulates a page.

<br>

When the page loads, it is called an event. When the user clicks a button, that
click too is an event. Other examples include events like pressing any key,
closing a window, resizing a window, etc.

<br>

Developers can use these events to execute JavaScript coded responses, which
cause buttons to close windows, messages to be displayed to users, data to be
validated, and virtually any other type of response imaginable.

<br>

Events are a part of the Document Object Model (DOM) Level 3 and every HTML
element contains a set of events which can trigger JavaScript Code.
Please go through this small tutorial for a better understanding (HTML Event
Reference)[http://www.tutorialspoint.com/html/html_events_ref.htm]. Here we will see a few examples to understand the relation between
Event and JavaScript.

#### onsubmitEvent Type

onsubmit is an event that occurs when you try to submit a form. You can put
your form validation against this event type.
```
<html>
<head>
<script type="text/javascript">
<!--
function validation() {
 all validation goes here
 .........
 return either true or false
}
//-->
</script>
</head>
<body>
<form method="POST" action="t.cgi" onsubmit="return validate()">
.......
<input type="submit" value="Submit" />
</form>
</body>
</html>

```

#### onmouseover and onmouseout

These two event types will help you create nice effects with images or even with
text as well. The **onmouseover** event triggers when you bring your mouse over
any element and the **onmouseout** triggers when you move your mouse out
from that element. Try the following example.