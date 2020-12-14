In the unmounting phase we have componentWillUnmount method

1. componentWillUnmount - 
This method is called when a component is being removed from the DOM.
this is the method where we can perorm some clean up tasks such as invalidating timers, canceling network requests, or cleaning up any subscriptions, 
that were created in componentDidMount().
You should not call setState() in componentWillUnmount() because the component will never be re-rendered
