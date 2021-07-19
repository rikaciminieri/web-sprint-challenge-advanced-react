# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    A functional component can do anything a stateful component can, in less code. Functional components can be "dumb" components that mainly render UI, or with hooks, they can hold state and be very powerful as well. Functional components do not have a lifecycle method or a render method. 

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    componentWillMount is an outdated unsafe method that will invoke just before mounting occurs.componentWillUpdate is invoked just before rendering when new props or state are being received. Both are considered unsafe to use in modern React. componentDidMount and componentDidUpdate are more commonly used and are invoked upon mounting, and upon updating respectively 

3. Define stateful logic.

    Stateful logic is logic that is built into a component. This logic usually deals with state in the component. 

4. What are the three step of creating a successful test? What is done in each phase?

    Arrange: Rendering the component into a virtual DOM
    Act: Searching for the element on the document that you'd like to test
    Assert: Make sure the code is doing what it is supposed to do 