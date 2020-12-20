What is Redux?
it an open-source JS library to manage an application state.
It has nothing to do with react, it is an independent library.

use case:-

suppose we haved multiple components in react app, around 50 -70 components then it becomes very difficult to manage state of an application.

take a look at the scenario 1 below:-

We have App.js & it having two childs,

users & Product (both are siblings)

so in the user component we have auth state which authenticates user & help to login.
in the Product component also we need auth state to show products which were in cart of that user.

but auth state is part of Users component so here we need to apply Lifting state up concept & move that state to App component, then we can access that state in Products.


Scenario 2:-
Suppose we have 4 components

component A B C & D

A is having all the states in it & if we want that state in D, then we need to pass that state as a prop to component B then to C & again to D. this is called as prop Drilling.

prop drilling is efficient if we have small application.

to solve this issue in larger applications we can use Redux.

in Redux, state is managed in central store & all the components can access state from the store directly.
