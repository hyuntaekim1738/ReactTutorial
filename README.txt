REACT TUTORIAL:
This tutorial follows along with the video: https://youtu.be/SqcY0GlETPk
This project uses React and Typescript to create a basic application for the purpose of learning React, which
organizes the page into components for reusable and modular code. React creates a Javascript virtual DOM from a component tree, which is an in memory representation of the 
component tree. When the state of the component changes, it changes it in the virtual DOM and then updates 
it within the actual DOM using ReactDOM library. This README serves as notes for future reference.

Set up:
Development environment requires node 16 or higher.
React app creation has 2 tools which are the official CRA and Vite which is more popular.
Using vite, run "npm create vite@latest" or "vite@4.1.0" for the specific version and select React, TypeScript.
Run using "npm run dev" command to run the program.
Uses bootstrap using the command npm install bootstrap@5.2.3 and imports bootstrap in main.tsx. Reference
the bootstrap docs for styling the certain components

Project layout:
node modules contains dependencies.
public folder contains public assets like images.
src folder holds source code of the application where we write our components.
index.html is the basic template and the root div holds the container for our application. The script is the entry point to our
app
Package.json holds project info.
Tsconfig.json tells the compiler how to compile the javascript.

Components:
Components can be a class or function but functions are popular because they're concise and easy to write.
Name them using pascal casing where you capitalize functions.
You can have each component return JSX where you annotate what each component is with HTML.
Components are shared with import/export default statements and used in html tags.
You can dynamically get data by having {} for functions or variables or using if statements in the Javascript.
It's convention to put all your components under a folder in src called components.
You cannot return more than one type of element per component you can get around this with a fragment which you can 
import or just signal with <> </>. Use mapping for Dynamic display and wrap it in braces

Hooks and properties:
A hook is a function that allows us to tap into built in features in React. a state is data that changes over time
Every component has its own state that is independent of other components
Props are inputs to components. State is hte internal data managed by component that can change over time.
Props should be treated as immutable but state isn't. Any time either is changed, react will rerender the component

Children:
React has a special kind of prop called children where you can pass in data
from the info nested within an JSX html tags
