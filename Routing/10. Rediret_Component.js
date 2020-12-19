Redirect is also a component from react-router which can be used to redirect user from one URL to Another.

Redirect does not render any component based on URL. it just changes URL.
it just redirects the user to another URL & if that URL is handled with any Route then that component gets render.

<Redirect from='/' to='/posts'>

here when user enters xyz.com/ then Redirect component will redirect user to xyz.com/posts. it will change the URL.

we can only use from prop inside Redirect if we are writing that Redirect component inside switch.
if we are writing Redirect outside of switch then we cant add from prop in Redirect .

use case:-

1. in my zenconnect app, on forgot password page, once user resets his password successfully then i am redirecting user to login page.
2. 
