1. What problem does the context API help solve?
   -It solves the problem of Prop Drilling and allows you to share props or state with an indirect child or parent
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   -The store is a globalized state that takes a reducer as a parameter

   -An action describes what you want to do to the state

   -A reducer modifies the state in the store based on an action parameter

   -The store is a master container for all the state in the app. this is why its the single source of truth

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   -application state is more globally defined and accessible throughout the application and used typically in multiple components. Component state is typically locallized to a component. If you need to use state across multiple components, use application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   -redux thunk allows us to do async calls and use a funtion inside of an action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

   -I like redux so far the most, and even though its a bunch of boilerplate to get it set up, its very useful to have a master list of state for the application I can access anywhere, I can see how this gets useful especially with bigger applications.
