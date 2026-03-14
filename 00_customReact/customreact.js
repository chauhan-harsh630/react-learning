// This is a custom render function.
// React actually uses a similar Virtual DOM reconciliation algorithm to convert Elements to Real DOM Elements
function customRender(reactElement, container) {
    /* 
    // Basic Approach (Hardcoded)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */

    // Optimized and Dynamic Approach for any React Element
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    
    // Dynamically loop through props and set them
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    
    // Inject (render) it to the root container
    container.appendChild(domElement)
}

// Behind the scenes, when you write JSX in React:
// <a href="https://google.com" target="_blank">Click me to visit google</a>
// Babel transpiles it into an object that looks like this:
const reactElement = {
    type: 'a', // The HTML Tag
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// Find the root element where the React App should be rendered
const mainContainer = document.querySelector('#root')

// Render the Custom React Element into the container
customRender(reactElement, mainContainer)
