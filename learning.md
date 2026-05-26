# ROUTING

- -> with routing,we mathc differetn URLs to differetn UI views(React Component):routes
- -> this enables user to navigate between different application screens using the browser URL
- -> keep the UI in sync with current browser URL
- -> routing is delt by 3rd party package react router
- -> allows us to built single page application

## SINGLE PAGE APPLICATION

- -> application thta is executed entirely on the client(browser)
- -> Routs:different URL correseponds to differetn views

> ->User clicks router link -> URL is chnaged(In react,react-router package does this job)-> DOM is updated:react component corresponding to the new URL is rendered[when ever needed it can load data from web API]

- -> JavaScript (React) is used tyo udpate the page(DOM)
- -> The page is never reloaded(entire app is juts one page so without any hard reloads)

> to make SPA we cant use <a> as it refreshes the page we have to use <Link to=""></Link> to add active features use <NavLink>

## Styling option in react

1. inline CSS using using style prop with local scope
2. css or Scss file using className prop with entire app as scope
3. css modules using className with component as scope
4. CSS-in-JS using creating new component scopped component and based in JS
5. tailwind using className prop scoped JSX element
6. using UI library MUI,Chakra UI mantine

> to use global in module.css

```
    :global(.test) {
    background-color: red;
    }
```

## THE URL FOR STATE MANAGEMENT

- The URL is an exceleent place to store UI state and an alternative to useState in some situaltion .Example: open/close panels,currently selected list item,list sorting order,applied list filter

### reasons

1. Easy way to store state in a global place,accessible to all component in the app
2. good way to pass date from one page into the next page
3. make it possible to bookmark and share the page with the exact UI state it had at the time

> www.example.com[/app/cities](path)/[lisbon](param)?[lat=38.728&lng=-9.141](query string)
> path -> corresponds to component currenlty displayed
> param(parameter) -> pass data to next page
> query string -> useful to store some global state that should be accessible everywhere

## Programmatic navigation

- to move to new URL without the user having to click on any link
- use case: right after submitting form

## CONTEXT API (Advance state management)

### a solution to prop drilling

- context API basically allows components everywhere in the tree to read state that a context shares.
- system to pass data throughout the app without manually passing props down the tree
- allows us to " boardcast" global state to the entire app
  1. Provider: gives all child component access to value

  > 1: create a new content

  ```
   const PostContext = createContext();
  ```

  2. Value: data we want to make available(usually state and function)

  > 2: provide value to child component

  ```
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}

  ```

  3. consumers: all component that read the provided context value

  > 3: consuming the content value

  ```
    const { onClearPosts } = useContext(PostContext);
  ```

> whenever the content value changes/updated all consumers will be automatically re-rendered

> value is updated -> all consumer re-renders(a new way of re-rendering components)

## Review: what is state management

- giving each peice of state the right home

### Types of state

1. state accessibility

- local state : needed only by one or few component, only accessible in component and child component
- global state: might needed by manuy component,accessible to every component in the application

> if this component was rendered twice should a state udpate in one of them reflect in the other one ? global : local

2. state domain

- remote state: all application data loaded from a remote server(API),
  usually asynchronous,need re-fetcheding+updating
- UI state: everything else(theme,list, filtered, form, data, etc),usualy synchronous and stored in the application

### state placement options

- Local component: useState,useReducer,userRef : local state
- parent component: useState,useReducer,userRef : lifting up state
- content : Content API +useState or useReducer : Global state(Prefereably UI state)
- 3rd-party library: Redux,React Query, SWR, Zustand,etc : Global state(remote or UI)
- URL: React Router : Global state,passign between pages
- Browser : Local storrage ,sessionstoreage etc : stpring data in user's browser

### state management tool options

## State Management Matrix

|                  | **Local State**                                                       | **Global State**                                                                             |
| ---------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **UI State**     | `useState`, `useReducer`, `useRef`                                    | Context API + `useState` / `useReducer`, Redux, Zustand, Recoil, React Router                |
| **Remote State** | `fetch` + `useEffect` + `useState` / `useReducer` _(small apps only)_ | React Query, SWR, RTK Query _(preferred)_ + Redux/Zustand/Recoil (if needed for global sync) |

## PERFORMANCE OPTIMIZATION TOOLS

-> Prevemt wasted renders

- memo (component)
- useMomo(object, function)
- useCallback
- Passing elements as childrene or regular prop

-> Improve App Speed/Responsiveness

- useMemo
- useCllback
- useTransition

-> Reduce Bundle Size

- using fewer 3rd party packages
- code splitting and lazy loading

## WHEN DOES A COMPONENTS INTENCE RE-RENDER?

-> A component instance only re-renders in 3 different situation

- state change
- content change
- parent component re-rendering

> prop change doesnt case re-render as it only happen when parent re-render,henc parent re-render creates the false impression that changing props re-renders a component which is false

### Remember: A render does not mean that the DOM actually gets updated,it just means the component function gets called,But this can be an expensive operation

### WASTED RENDER

-> a render that didn't prodced any change in the DOM
-> only a problem when they happen too frequently or when the component is very slow

## What is MEMOIZATION

> Memoization: Optimizing technique that executes a pure function once,and save the result in memory.If we try to execute the function again with same argument as before,the previosly saved result will be returned,without executing the function again

-> Memorise components with memo
-> Memorise objects with useMemo
-> Memorise function with useCallback

-> Prevent wasteed renders
-> improve app speed/responsiveness

### THE MEMO FUNCTION

-> Used to create a component that will not re-render when its parent re-render as long as the props stays the same between renders
-> Only affects props! A memorized component will still re-render when its own state changes or when a context that it's subscribed to changes
-> Only makes sense when the component is heavy(slow rendering),re-render often and does so with the same props

### AN ISSUE WITH MEMO

> In react,everything is re-rendered on every render(including objects and function)

> In JavaScript, Two objects or function that look the same ,are actually different({}!={}) because they are compared by reference, not by their content

- therefore

-> If object or function are passed as props ,the child component will always see them as new props on each re-render
-> If props are different between re-renders,memo will not work

- Solution

-> We need to memorize objects and function ,to make them stable (preserve) between re-render(memorized{}== memoized {})

### useMemo & useCallback

-> Used to memoized value(useMemo) and function (useCallback) between renders

-> Values passed into useMemo and useCallback will be stored in memory ("cache") and returned in subsequent re-render as long as dependencies ("input") stayes the same

-> useMemo and useCallback have a dependency array(like useEffect): whenever one dependecy changes the value will be re-created

### THREE BIG USE CASES

> useMemo and useCallback is only used in only these 3 cases

- Memoizing props to prevent wasted render(together with memo)
- Memoizing value to avoid expensice re-calcualtions on every render
- Memoizing values that are used in dependency array of another hook

> state setter functions are automaticlly memoized,you can exclude them from dependecy array

### Optimizing Context Re-renders

- Your need to optimise the Context when these 3 things are true at the same time

-> State in the Context needs to change all the time
-> Contenxt has many consumers
-> The app is slow and laggy

1. pass children
2. memoize direct decendent of the context
