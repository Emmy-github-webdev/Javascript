1. E[xplain **event delegation**](https://www.geeksforgeeks.org/event-delegation-in-javascript/).
  There are three different phases during lifecycle of an event JavaScript.
  - **Capturing phase** is when event goes down to the element.
  - **Target phase** is when event reach the element
  - **Bubbling phase** is when the event bubles up from the element.
  **Event Delegagtion** is a pattern to handle events efficiently. Instead of adding an event listner to each and every similar element, we can add an event listner to the parent elemet and call an event on a particuler terget using **.target** property of the event object.

  Examole without event delegation
  ```
  const customUI = document.createElement('ul');

  for (var i = 1; i <= 10; i++) {
      const newElement = document.createElement('li');
      newElement.textContent = "This is line " + i;
      newElement.addEventListener('click', () => {
          console.log('Responding')
      })
      customUI.appendChild(newElement);
  }
  ```
  Examole with with event delagation using **.nodename** and **.target** that allows us to identify a specific node.
  ```
  const customUI = document.createElement('ul');

  function responding(evt) {
      if (evt.target.nodeName === 'li')
          console.log('Responding')
  }

  for (var i = 1; i <= 10; i++) {
      const newElement = document.createElement('li');
      newElement.textContent = "This is line " + i;
      customUI.appendChild(newElement);
  }

  customUI.addEventListener('click', responding);
  ```

2. Explain how **prototypal inheritance** works.
  **Prototypal inheritance** is a feature in JavaScript used to add methods and properties in object. It is a method by which an object can inherit the properties and methods of another object.
  ```
  // Say we created an object that we are going to consider as a class
  var classObject = function() {
    console.log("i am at the very top coz i am a class object");
  };
  // and we’ve also added a function to our classObject
  classObject.classMethod = function() {
  console.log("I do as I am told");
  }
  // Note: classObject is an object, not an instance

  // Now we are going to create an instance of classObject via new keyword.
  var otherObject = new classObject();
  otherObject.classMethod = function() {
    console.log("I do bare minimum as required.");
  }

  console.log('call 1');
  otherObject.classMethod(); // calls the Instance object method

  /*
    Question is, Does this inherit the classMethod from classObject?
    Answer is, No
    What this does is it creates a Static Method
    this can also be created even without first instantiating the object
    wth is Static Method? Don’t fret
    this just means, the method will only exist in Class and not on its child objects
    This is the same as, when we add a function to an instance, it will only apply to that particular instance
  */

  console.log('call 2');
  classObject.classMethod(); // calls the Static object method

  /*
    Now we are getting to the good part
    When we declare prototype, all created instances from here on will now have the static method
  */
  classObject.prototype.classMethod = classObject.classMethod;

  console.log('call 3');
  otherObject.classMethod(); // still calls the Instance object method

  /*
    We created another object and instantiated a new classObject
    this should now inherited the static method
  */
  var anotherObject = new classObject();

  console.log('call 4');
  anotherObject.classMethod(); // now, we inherited classObject's method, classMethod

  ```