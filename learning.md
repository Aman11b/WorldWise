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
