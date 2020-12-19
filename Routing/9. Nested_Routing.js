we can do nested routing in react.

example. 
supose i have a project with 3 components
App.js -> Posts.js -> Post.js

so here i have 3 components 
App.js is parent whose chiild is Posts.js whose child is Post.js

in App.js
I have added Route like
<Route path='/posts' component={Posts} />

so whenever user enters xyz.com/posts it will render Posts.js component.

again if i decided to add route inside Posts.js which will show my individual post   // this is called nested routing
in Posts.js
<Route path='/:id' component={Post} /> 

so when user enters xyz.com/posts/1234 then it will render Post component

but one point to note here as we are doing nested routing is that <Route path='/:id' component={Post} /> will look for xyz.com/postid.

our Post component routed from Posts component, so to make that path correct we need to create path dynamically,
in Posts.js
<Route path= {this.props.match.url + '/:id'}  component={Post} />
