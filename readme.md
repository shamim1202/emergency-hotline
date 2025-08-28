**------------------------> Question No - 1 <-------------------------**
What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer : getElementById is used to select a unique id. getElementsByClassName is used to pick all elements with a specific class. querySelector select only its first matching element or selector and querySelectorAll select its all element or selector.

**-------------------------> Question No - 2 <-------------------------**
How do you **create and insert a new element into the DOM**?

Answer : document.createElement() is used to create a new element, and after creating a new element, appendChild inserts this element into the DOM.

**-------------------------> Question No - 3 <-------------------------**
What is **Event Bubbling** and how does it work?

Answer: Event Bubbling is when an event triggered on a child element (like a button click) propagates upward through its parent elements to the top of the DOM. Each parent element with a listener for that event can respond. But it can stop by using using event.stopPropagation().

**-------------------------> Question No - 4 <-------------------------**
What is **Event Delegation** in JavaScript? Why is it useful?

Answer : Event Delegation is a technique where instead of adding event listeners to many child elements, add a single listener to their parent element. Writing less code, dynamic elements, better performance it's useful side.

**-------------------------> Question No - 5 <--------------------------**
What is the difference between **preventDefault() and stopPropagation()** methods?

Answers : By using preventDefault() we can stops the browser’s default behavior for an event Prevent form submission, link navigation, or right-click default menu.
On the otherhand by using stopPropagation() we can stops event bubbling or capturing.
