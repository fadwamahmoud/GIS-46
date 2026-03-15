

Introduction To React

### Setting Up A React Environment

    How React projects can be created.
    How to use Vite to create new React projects.
    How to format the code in React projects.
    What React Developer Tools are.

### React Components

    Learn about React components.
    Understand how to create components.
    Describe where components reside in a React project.

### What Is JSX?

    What JSX is.
    Differences between JSX and HTML.


### Passing Data Between Components

    Passing data between components.
    Using data to create customizable reusable components.


### Rendering Techniques

    Rendering list of components in JSX.
    Conditionally rendering UI.

### Keys in React
    What keys are and how react uses them
    Good and bad keys in react apps

### React 

    Virtual DOM  ------------- DOM 


    To decide what things in the real DOM to update
    minimize unnecessary actions


    1. Virtual DOM
    2. compare changes => diffs 
    3. Update real DOM


### Component KEYS
props + state 
ID => key 

for example: 

- if key changes => this means there's a brand new instance of the componet 
 - we don't need to give components keys manually 

### Keys when rendering Lists
- Keys: Unique and consistent
- unique identifier => id
- fetch data => 
- Don't generate keys on the fly


### Keys and state
- keys relate to state


### Introduction to state
 - Manipulate state 
 - What state is in React => State is a component's memory
 - How to use state
 - What happens when state is changed

### More on state
- How to structure state
- How state updates
- Learn about controlled components












### Rerendering
Component => state or props are changed

- React => call the function of the component
- Based on the new state/props
- Apply to DOM
 - Component is recreated =>  [currentStateValue] = useState()

 user/date => React => efficient update to the UI 

### Reconciliation Algorithm

 - Virtual DOM (React) => lightweight representation of the actual DOM
 - Compare virtual DOM with the previous (diff) 
 - Minimal set of changes needed => update the actual DOM

 ### Hooks
 - function => let me use React features
 - `use` 
    1. Hooks can only be called from the top level of a functional component
    2. Hooks cannot be called inside loops or conditions


### More on State

- General Rule: Don't put values in state that can be calculated using existing values (state, props)
- State should not be mutated (directly updated) =>

### How state updates
- State updates asynchronously 
- setState => React applies the update in the next component render
- state variables are not reactive => component is
- State = snapshot (state stays the same during the same render)
- setState => triggers an update to the new value
- when a callback is passed to setstate => latest state is passed as an arguemnt to the cb
- Update state using the previous state and ensure consistency  => updater


### Controller components 


