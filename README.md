
# 1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll

* getElementById is used to select a single element using its unique id. Since id is unique, it always returns only one element.

* getElementsByClassName is used to select elements using a class name. It can return multiple elements and provides an HTMLCollection, which is an array-like object.

* querySelector is used to select the first element that matches a CSS selector. It returns only the first matching element.

* querySelectorAll is used to select all elements that match a CSS selector. It returns a NodeList, which is also an array-like object.

---

# 2. How to create and insert a new element into the DOM

To create and insert a new element into the DOM, first a new element is created using JavaScript. Then content or attributes can be added to that element. Finally, the element is inserted into the webpage as a child of an existing parent element. This allows dynamic content to be added to the webpage.

---

# 3. What is Event Bubbling and how it works

Event Bubbling is a process in which an event starts from the target element and then propagates upward through its parent elements in the DOM hierarchy.

This means when an element is clicked, the event first runs on that element and then moves to its parent, then its parent's parent, and continues up to the document level.

---

# 4. What is Event Delegation and why it is useful

Event Delegation is a technique where an event listener is added to a parent element instead of adding event listeners to multiple child elements.

It works by using event bubbling to detect which child element triggered the event.

It is useful because it improves performance, reduces code complexity, and works well for dynamically added elements.

---

# 5. Difference between preventDefault() and stopPropagation()

preventDefault() is used to stop the default behavior of an element. For example, it can prevent a link from navigating or a form from submitting.

stopPropagation() is used to stop the event from bubbling up to parent elements. This means the event will only run on the target element and not on its parents.

---