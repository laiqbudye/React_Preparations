Link component is also part of react-router-dom.

in the normal application if we want to go to another page then we write <a href='google.com'>Go to goole</a>.

this thing is allowed in react also, but the problem is that whenever we click on anchor tags it sends new request to the server & our page gets reload, so in this case our entire
app state gets refreshed.

so to avoid such problems Link component from react-router is very useful.

<Link to='google.com'>Go to goole</Link>

here it wont send new request & our page does not get reload. underneath the hood react considers it as anchor tag & it block the new request with preventDefault().
to prop defines the location to navigate to.

example:-
export const Home = () => (
  <div>
    Home Component
    <ul>
      <li>
        <Link to=”/items”>Items</Link>
      </li>
      <li>
        <Link to=”/category”>Category</Link>
       </li>
    </ul>
  </div>
);


ref:- https://medium.com/the-andela-way/understanding-the-fundamentals-of-routing-in-react-b29f806b157e

Difference between Link & NavLink
The Link component is used to navigate the different routes on the site.
But NavLink is used to add the style attributes to the active routes. 

<NavLink activeClassName="active" to="/users">
    Users
</NavLink>
