Higher order components
a higher-order component is a function/component that takes a another component as i/p and returns a new component.


for e.g. AUX component ( that i made in zenconnect )

const aux = props => props.children

export default aux;


and in a component we can write in render method like

render(){
  <Aux>   // it will behave like React.Fragment() in this case
    <component 1 />
    <component 2 />
  </Aux>
}


another example,
  redux's connect method which connects react component & redux store is also HOC.
