using routing we can also pass some data in URL & can extract that data from URL.

suppose i have one app where i am showing multiple posts & when i click on that post then individual post will be shown.

to implement this i can add 

<Link to = '/ + post.id'>
logic to show post
</Link>

so when i click on any of the post it will change URL to xyz.com/1234.

i have written Route for this like
<Route path='/:id' component={fullPost} />

so from fullPost i can extract that id from URL as below,

this.props.match.params.id   , here id should be same as what param we set in Route path.
