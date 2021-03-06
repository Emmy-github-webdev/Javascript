# DIALOG BOX

JavaScript supports three important types of dialog boxes. These dialog boxes
can be used to raise and alert, or to get confirmation on any input or to have a
kind of input from the users. Here we will discuss each dialog box one by one.

#### Alert Dialog Box

An alert dialog box is mostly used to give a warning message to the users. Nonetheless, an alert box can still be used for friendlier messages. Alert box
gives only one button "OK" to select and proceed.

#### Confirmation Dialog Box

A confirmation dialog box is mostly used to take user's consent on any option. It
displays a dialog box with two buttons: **OK** and **Cancel**.

<br>

If the user clicks on the OK button, the window method **confirm()** will return
true. If the user clicks on the Cancel button, then **confirm()** returns false.

#### Prompt Dialog Box

The prompt dialog box is very useful when you want to pop-up a text box to get
user input. Thus, it enables you to interact with the user. The user needs to fill
in the field and then click OK.

<br>

This dialog box is displayed using a method called **prompt()** which takes two
parameters: (i) a label which you want to display in the text box and (ii) a
default string to display in the text box

<br>

This dialog box has two buttons: **OK** and **Cancel**. If the user clicks the OK
button, the window method **prompt()** will return the entered value from the
text box. If the user clicks the Cancel button, the window
method **prompt()** returns **null**.