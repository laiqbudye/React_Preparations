// Whats  difference between class & functional components.

Class components
1. they need to extend React.Component
2. they have access to state
3. they have access to lifecycle methods (componentDidMount, componentDidUpdate etc)
4. to access state & props in class components we need to use this.state & this.props as state & props are properties of Component class. 
5. we can use class components when we need access to state & lifecycle methods or in case we dont want to use hooks.


Functional Components
1. dont need to extend anything
2. access to state if we use useState() hook
3. they dont have access to lifecycle methods (componentDidMount, componentDidUpdate etc), instead we can use useEffect to perform tasks
4. to access state & props in class components we need to use state & props.X, props.PropName 
5. if we want to use hooks then we can consider using functional components
