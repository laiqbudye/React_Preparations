when we define path in Route / Link component, there can be 2 types of path.

1. Absolute Path
2. Relative path

1. Absolute Path
by default, if you just enter 

to='/some-path' or to='some-path'

both these path get appended to the base domain like xyz.com/some-path.

so this is an Absolute Path.

Absolute path means that it's always appended right after your domain. Therefore, both syntaxes (with and without leading slash) lead to xyz.com/some-path .



2. Relative Path
when we create our pathname dynamically then that path is considered as Relative Path.
Relative path is very useful when our one of the component is loaded already & we need to append something to that URL.

for example
currently i am at location xyz.com/posts, & i want to append something to that URL then i cant write like to='/add-post'.

it will consider that as xyz.com/add-post, but i wanted it as xyz.com/posts/add-post.

so to achieve this i need to detect current URL & then append my string to that URL.
<Link to={props.match.url + '/add-post'}>

so this will lead me to the correct URL.
