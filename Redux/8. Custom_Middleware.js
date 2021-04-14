
// apart from in-built middelewares we can create our own middlewares


// this is the custom middleware to log every action

const loggingMiddleware = (store) => (next) => (action) => {
  console.log(action.type);
  next(action);
};
