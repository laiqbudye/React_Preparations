withRouter is a higher order component which takes another component as a parameter to which it passes (routing related things) histrory, location, match object as a props.


suppose in APP.js file i have written like,

<Route path="/posts" component={Posts} />

then inside Posts.js component i can access this.props.histroy or this.props.location or this.props.match.

if i have one another component Post.js rendering inside Posts.js like below,

render(){    // render method of Posts.js
  <Post />
}

so inside Post.js component we cant access routing related props i.e history, location, match

to solve this problem there are two ways,

1. pass all this things as a props from parent component
render(){    // render method of Posts.js
  <Post {...this.props} />
}

2. withRouter HOC-
enclose your child component (Post.js) inside withRouter HOC

e.g
withRouter(Post)

by this we can access routing related info inside Post component also.


for more info:- https://derivco.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8142941#overview  (lecture no. 198)
