What is the difference between 

<button onClick={this.handleClick}> Click Me </button>

<button onClick={(e) => this.handleClick(e)}> Click Me </button>

There are two differences in above example

1. Related to THIS keyword
2. Related to re-render (binding of function)

1. Related to this keyword

suppose the definition of handleClick is as below

function handleClick(){
  console.log(this);
}

so when we call this function from render method as this.handleClick(), then value of THIS returns undefined.

same function if we call with () => this.handleClick(), then this will point to class in which it is written.

on the other hand if we write handleClick as

handleClick = () => {
  console.log(this);
}

for above function if we call as this.handleClick(), then value of THIS returns class in which it is written. // arrow funcitions binds this automatically becoz of lexical scope


one more way is we can bind this to that function inside class constructor also

constructor(){
  super();
  this.handleClick = this.handleClick.bind(this); // here this points to the class & that this we are binding to handleclick so we can use that later
}


for more info visit:- https://codeburst.io/binding-functions-in-react-b168d2d006cb



2. Related to re-render 
when we write arrow functions inside render method then on each render those arrow functions gets re-allocated (re created). in JS functions are nothing but objects, 
so when they re allocated there memory reference also get changed. 

when parent component pass an arrow function as a prop to child component then on every re-render that arrow gets new memory address & child component considers that 
this is a new/updated function and gets re - render, even if it is written with pureComponents or shouldComponentUpdate.

to avoid such unwanted re-rendering we should not pass arrow functions or bindings as a props to child component.


for more info visit:- https://www.freecodecamp.org/news/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36/








