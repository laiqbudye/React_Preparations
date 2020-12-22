Context API introduced in React V16.3
we can call it as redux option.
we dont need any exteral dependency to use context

use case
suppose we have 4 components in our app. component A,B,C,D
component A is handling whole state of our app. component B is child of A, component C is child of B, component D is child of C.
so if we want to access state in component D , then we need to pass it from A to B, B to C & then finally C to D.. this is called as prop drilling.


so to avoid prop drilling we can use context API. here all the state managed at central store.
