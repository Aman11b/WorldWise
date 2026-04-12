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
