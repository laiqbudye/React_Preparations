
// State vs Props

// state & props are related to each other.

// State of a component will often becomes prop of child components.

// props pass down to a child component from render method of a parent component.

<MyChild name={this.state.childsName} />

// in the example above 
  
// The parent's state value of childsName becomes the child's this.props.name
  
// normally props are immutable, if we need to change the value of props then its parent should update its state & then react will propagate / update its prop.
