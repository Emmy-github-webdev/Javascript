1. **What is node.js?**
  _Answer_
  **node.js** is a server side scripting which is used to build scalable programs. The advantages of **Node.js** over other scripting language includes
  - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
  - Node.js uses an event driven, asynchronous, non-blocking I/O model
  - Node.js operate on a single thread event loop
  > I/O (Input/Output)
  **I/O** refers to the program's interaction with the system's disk and network. Examples includes Reading/Writing data from/to disk, making HTTP request, and talking to the database.
  > Synchronous
  **Synchronous** execution usually refers to code executing in sequence. In Synchronous programming, the program is executed line by line at a time.
  > Asynchronous
  **Asynchronous** execution usually refers to code not executing in the sequence it appears in the code. In async programming the program doesn't wait for the task to complete and can move on to the next task.
  ```
  // Synchronous: 1,2,3
  alert(1);
  alert(2);
  alert(3);

  // Asynchronous: 1,3,2
  alert(1);
  setTimeout(() => alert(2), 0);
  alert(3);
  ```