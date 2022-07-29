# Lesson Plan

## Key Learning Objectives

- Create and use React Components
- Pass Props between components

## Bonus Learning Objectives

- Compare and contrast building a page with React, and building a page with standard HTML + CSS
- Break down a proposed page design into components

## Key Vocabulary

- React: A framework for building web applications out of reusable components
- Component: A reusable "building block" of React applications
- Props: Also called "properties," these are used to configure and customize React components.
- JSX: A specialized dialect of Javascript used to write React applications.

## Getting Started

### Kicking off a React App

Let's start by seeing if we can start up a React app:

`cd react/shoes`

`npm install`

`npm start`

You should see the TLM logo - if you do not, or experience any error, please don't hesitate to speak up.

## Exploring React

Open the file `App.js`. You will notice that most of the file is devoted to a Javascript function called `App`, that looks as though it returns HTML. We'll take some time to explore this. This is our first example of a React Component - for now, we'll say that a React Component is a Javascript function that returns either HTML or other React Components. Technically, there's a name for the return of React components - it's called JSX. We'll learn more about JSX later.

> At this point, I would also touch over other key points briefly, such as importing CSS. However, the focus is going to be on layout - it's OK if those things are a little mysterious when we're starting off. It's also worth pointing out the className, as class is a reserved word in JS.

## Editing App.js

As the instructions on the webpage say, you can edit `App.js` and save, and your changes will be reflected in the webpage.

Let's start by changing the text on the page to read `This is my first edit to a React App`

We should see that text reflected in the webpage.

## Learning some JSX

In addition to HTML, React components can also return other React components. Above the App function, let's make another function:

```
function MyComponent() {
  return (<span></span>);
}
```

Between the `span` tags, place the text "Hi, my name is" followed by your name.

By itself, this will not affect your webpage. We have to include it in the App() function.

Let's do that now - add `<MyComponent></MyComponent>`

While we do this, we'll learn some of the quirks of JSX - unlike HTML, every tag in JSX must have closing tag.

Try deleting the </MyComponent>` and saving - you'll get an error.

It is irritating to have to have such long closing tags when there's no content in the middle - JSX does have a shorthand for that. Replace `<MyComponent></MyComponent>` with ``<MyComponent />` - this is a shortcut to indicate a single component.

Before we move on, let's learn one more JSX rule, which is that you must ensure that ONE tag wraps the return value of any React Component. At the bottom of the app function, we'll try adding some extra HTML tags. In standard HTML, this would be no problem, but here we get an error. This is because technically React Components are Javascript functions, and those functions can only return one thing at a time. Don't worry too much about these quirks for now - the computer will let you know when you missed a rule, and it's very normal to rely on those hints. React is a powerful tool, and almost nobody can remember every single rule without help.

## Passing Inputs to Our Components - Props

For now, we have made all our React Components functions that have no inputs. However, much of the power of functions lies in their ability to work with inputs.

In React, to make a component accept inputs, we can insert a props (short for properties) input into our function. Let's do that with MyComponent.

Even when you want to pass lots of inputs to a component, we still only have one `props` - we can access the inputs using dot notation, treating props as a Javascript object.

Let's use some inputs - in JSX, you can reference Javascript variables and expressions by wrapping them in braces `{}`. Let's make it so the name in MyComponent is a variable.

> I would have the students choose a reasonable variable name for the prop, and use that to make the component a little more dynamic. After they pass the prop in App(), I would have them add another variable that appeared in the MyComponent string.

## The "children" prop

React has a special prop, called `children` that you can use to allow your component to be populated by other components. Let's look at an example.

Above App, let's make a component:

```
function BlueBorder(props) {
  return (<div className="border-blue"></div>);
}
```

What if I wanted to be able to use this component to place a blue border around whatever content I wanted? In that case, I can add `{props.children}` in the return statement. That's a special prop that means "all the JSX in the middle of this component". Let's see an example of that by wrapping the `div` just inside the header with our `BlueBorder` component.

In this example, this component doesn't do anything for us that we couldn't have done by editing CSS, but using `props.children` can be a powerful technique.

## Building a Webpage

Now that we've learned the basics of React, let's build a more realistic webpage.
Let's take a look inside the `html` folder, and we'll see a basic webpage. It's not very interactive, but we'll focus on building the layout in React.

> At this point, we will collaboratively notice patterns in the page, and break the page down into components. The general goal is to at least have the cards be components, but it's important to let the students take the wheel here.

## Building a reusable component

Now that we've planned our design, let's get implementing. Often, it can be more organized to have different components in different files. Let's make a new file for our first component.

> Almost always, we'd work on building the card component, generally having props such as something representing the image, the title, the price, and optionally an onPress handler. There's no rush to get into the onPress handler, but if the students bring it up, that's fantastic.

> Also, it's totally fine if students want to copy over/augment the existing HTML, but it's important to design collaboratively. It's fine to borrow the implementation, and it's also fine to use existing CSS, though I wouldn't want the structure of the existing CSS file to force students to use that implementation.

## Assembling our components

Now that we've built our building block, let's use it to assemble the page.

> Again, we're working collaboratively here and it's hard to know where we will go. It's totally fine to invoke a card 8 times - if students are really thriving, we could talk about rendering the cards just from an array of data that matches their card schema. I would never assume that, but if it turns out they're ready for it, all the better.

## Reflect

Now that we've built our page, let's take a moment to reflect about React. What did you like about React? How did the React version compare to the HTML version?

> Really what I'd like to see here is that students like that they don't have to write repetitive HTML, but ultimately it's their opinion.
