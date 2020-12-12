in class components we need to access state as this.state... here this will point to class... & state is just a property of that class.

if we print typeof this on console then it returns object

// What is need of constructor in class component.
// Why we need to pass props inside constructor. 
//e.g 
constructor(props){
  super(props)
}


Answer:-
  
  class Checkbox extends React.Component {
  constructor(props) {
    super(props);   
  }
}

// in Js super always call parent class constructor, in the example above it is React.Components constructor.

// Mainly we cant use this inside constructor before super() gets called, thats why its mandatory to write super() as a first statement in constructor

// the reason for this is as below.

// consider this example 

class Person {
  constructor(name) {
    this.name = name;
  }
}
class PolitePerson extends Person {
  constructor(name) {
    this.greetColleagues(); // 🔴 This is disallowed, read below why
    super(name);
  }
  greetColleagues() {
    alert('Good morning folks!');
  }
}


// for a moment suppose this is allowed before super(). so it will alert 'Good morning folks!'.

// but after one month we decide to update greetColleagues() which will show name also on alert msg.

// so the code will be,
  
  greetColleagues() {
    alert('Good morning folks!');
    alert('My name is ' + this.name + ', nice to meet you!');
  }

// But we forgot that this.greetColleagues() is called before the super() call had a chance to set up this.name. So this.name isn’t even defined yet.

// so this is the main reason why we need to write super() as a first line inside constructor.


---------------------------------------------------------------------------------------------------------------
  
  // so consider same example again 
  
  class Checkbox extends React.Component {
  constructor(props) {
    super(props);   
  }
}

// here why we need to pass props with super?

// if we dont pass props to super it will still access this.props from render() method as react passes the props after constructor execution.

// but in the same scenario we cant access this.props inside construtctor.

class Checkbox extends React.Component {
  constructor(props) {
    super();   
    console.log(props);  // print props
    console.log(this.props);  // undefined
  }
}


// so to avoid such scenarios its better to add super(props) 
