// Higher order components
// a higher-order component is a function/component that takes a another component as i/p and returns a new component.


// What is the need of HOC.

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

  // to overcome this situation " HIGHER ORDER COMPONENT" comes into picture.



  
//   WHY HOC:- to share common functionality between components
  
  e.g const IronMan = withSuit( TonyStark );    // here withSuit is a HOC which will take TonyStark as an input, enhance that & will return IronMan
  
  

  // basic skeleton of HOC

      import React, { Component } from 'react'

      const updatedComponent = (originalComponent) => {
          class NewComponent extends Component {
              render() {
                  return <originalComponent  name="Laiq" />   // here name will be available to all components which will make use of this HOC
              }
          }
          return NewComponent
      }

      export default updatedComponent
    
    
    
    // the same counter example with HOC will look like as below,
        
        withCounter.js (HOC)

          import React, { Component } from 'react'

          const withCounter = (OriginalComponent) => {
              class NewComponent extends Component {
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
                          <OriginalComponent count={this.state.count} incrementHandler={this.incrementHandler} />     // here count & handler will be available to all components which will make use of this HOC
                      )
                  }
              }
              return NewComponent
          }

          export default withCounter

  ------------------------------------------------------------------------------------------------------------

      ClickCounter.js
      
      import React, { Component } from 'react'
      import withCounter from './withCounter'

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

      export default withCounter(ClickCounter)    // here we are passing our component to HOC which will provide count functionality to us


  
       HoverCounter.js
        
        import React, { Component } from 'react'
        import withCounter from './withCounter'

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

        export default withCounter(HoverCounter)       // here we are passing our component to HOC which will provide count functionality to us


          
       App.js

      import './App.css';
      import ClickCounter from './components/ClickCounter';
      import HoverCounter from './components/HoverCounter';

      function App() {
        return (
          <div className="App">
              <ClickCounter />
              <HoverCounter />
          </div>
        );
      }

      export default App;

          
  
  
  

