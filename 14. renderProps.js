just like HOC, render props is also a way to share a common functionality between components.

Render prop - is a technique for sharing code between react component using a prop whose value is a function.

// what is the need of render props

// let us see this with an example.

// lets say we want a counter which will increment on a button click, the code for that component will be as below:-
  
  import React, { Component } from 'react'

  class ClickCounter extends Component {
      constructor(props) {
          super(props)

          this.state = {
              clickCount: 0
          }
      }

      incrementHandler = () => {
          this.setState(prevstate => {
              return {
                  clickCount: prevstate.clickCount + 1
              }
          })
      }

      render() {
          return (
              <div>
                  <p>{this.state.clickCount}</p>
                  <button onClick={this.incrementHandler}>Increment</button>
              </div>
          )
      }
  }
  
  export default ClickCounter
  
//   now assume again one new requirement comes which will increase count on a hover. the code will be,
    
    import React, { Component } from 'react'

    class HoverCounter extends Component {
        constructor(props) {
            super(props)

            this.state = {
                hoverCount: 0
            }
        }

        hoverHandler = () => {
            this.setState(prevState => {
                return {
                    hoverCount: prevState.hoverCount + 1
                }
            })
        }


        render() {
            return (
                <div>
                    <p>{this.state.hoverCount}</p>
                    <h1 onMouseOver={this.hoverHandler}>This is Hover Counter</h1>
                </div>
            )
        }
    }

    export default HoverCounter


  // now again lets consider client asks us to develop a component which will increase the count on a mouse scroll.
  // we can build that component with above approach as well, but in this case we are duplicating our code which is not a great choice.

  // to overcome this situation "RENDER PROPS" comes into picture.

  its completely fine to make propname as "render", it wont affect react lifecycle method.
  
  so the above code with render prop will be as below:-
    
    
    ClickCounter.js
    import React, { Component } from 'react'

    class ClickCounter extends Component {

        render() {
            return (
                <div>
                    <p>{this.props.count}</p>
                    <button onClick={this.props.incrementHandler}>Increment</button>
                </div>
            )
        }
    }

    export default ClickCounter


    HoverCounter.js
    import React, { Component } from 'react'

    class HoverCounter extends Component {

        render() {
            return (
                <div>
                    <p>{this.props.count}</p>
                    <h1 onMouseOver={this.props.incrementHandler}>This is Hover Counter</h1>
                </div>
            )
        }
    }

    export default HoverCounter


    Counter.js
    import React, { Component } from 'react'

    export class Counter extends Component {    // this is with render props approach
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementHandler = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1
                }
            })
        }

        render() {
            return (
                <div>
                    {this.props.render(this.state.count, this.incrementHandler)}   // here we are executing render prop which is a func coming from App.js
                </div>
            )
        }
    }

    export default Counter



    App.js
    import ClickCounter from './components/ClickCounter';
    import HoverCounter from './components/HoverCounter';
    import Counter from './components/Counter';

    function App() {
      return (
        <div className="App">
          <Counter render={(count, incrementHandler) => (     // here we are passing render as a prop which is a function. it wont affect react lifecycle method
            <ClickCounter count={count} incrementHandler={incrementHandler}></ClickCounter>
          )}
          />

          <Counter render={(count, incrementHandler) => (     // here we are passing render as a prop which is a function. it wont affect react lifecycle method
            <HoverCounter count={count} incrementHandler={incrementHandler}></HoverCounter>
          )}
          />
        </div>
      );
    }

    export default App;



// in the above example we are calling Counter comp with render prop, which is returning ClickCounter, HoverCounter component with count value & handler function
