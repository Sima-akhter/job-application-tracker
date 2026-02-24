
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById() Selects one element by ID.

getElementsByClassName() Selects multiple elements by class name (returns a live HTMLCollection).

querySelector() Selects the first matching element using a CSS selector.

querySelectorAll() Selects all matching elements using a CSS selector (returns a NodeList).

2. How do you create and insert a new element into the DOM?

Ans: Use document.createElement() to create the element.

Add content or class using innerText, innerHTML, or className.

Insert it into the DOM using appendChild() or append().

3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling is a process where an event starts from the target (child) element and then propagates (bubbles up) to its parent elements up to the document.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a technique where you add a single event listener to a parent element to handle events for its child elements using event bubbling.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:preventDefault() Stops the browser’s default action (like form submit or link navigation).

stopPropagation() Stops the event from bubbling up to parent elements.