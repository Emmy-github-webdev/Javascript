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