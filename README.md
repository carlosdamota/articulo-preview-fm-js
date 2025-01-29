# Frontend Mentor - Article Preview Component

This is my solution for the ["Article Preview Component" challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). This challenge helped me improve my layout and DOM manipulation skills in JavaScript.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built with](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continuous Development](#continuous-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size.
- See the social media share links when they click the share icon.

### Screenshot

*Add a screenshot of your project here.*

### Links

- Solution URL: [Add URL here](https://your-solution-url.com)
- Live Site URL: [Add URL here](https://your-live-site-url.com)

## My Process

### Built with

- Semantic HTML5
- CSS with native nesting (without preprocessors like SASS/SCSS)
- Flexbox and CSS Grid
- Mobile-first workflow
- DOM manipulation with JavaScript

### What I Learned

In this project, I learned how to use **native CSS nesting** to improve code organization without the need for preprocessors. One of the challenges was understanding how certain nested selectors affected specificity and inheritance in my CSS, which caused some unexpected styles. I solved this by properly structuring the rules and testing each change incrementally.

Additionally, I worked with **JavaScript to modify the DOM** and toggle classes using `classList.toggle()`. Here’s an interesting piece of code:

```js
const btnOn = document.getElementsByClassName("share-btn")[0];
const btnOff = document.getElementsByClassName("share-btn")[1];
const userInfo = document.getElementsByClassName("user-info")[0];
const shareContainer = document.getElementsByClassName("share-container")[0];

function share() {
  userInfo.classList.toggle("user-info-off");
  shareContainer.classList.toggle("share-container-off");
}

btnOn.addEventListener("click", share);
btnOff.addEventListener("click", share);
```

### Continuous Development

#### Detected Issues and Improvements

- **DOM Structure Refinement**: The activation and deactivation of the share container could be handled with `aria-hidden` to improve accessibility.
- **Better Code Organization**: Consider using CSS variables for repeated colors to enhance maintainability.

For future projects, I want to continue exploring:

- **Advanced CSS animations** to improve interactivity.
- **Accessibility (a11y) improvements** in interactive elements.
- **Using React components** for similar projects.

### Useful Resources

- [CSS Nesting Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting) - Helped me structure my CSS better without using preprocessors.
- [JavaScript DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) - A reference for handling events and classes in JS.

## Author

- GitHub - [@carlosdamota](https://github.com/carlosdamota)
- Frontend Mentor - [@your-username](https://www.frontendmentor.io/profile/your-username)
- LinkedIn - [Carlos Damota](https://www.linkedin.com/in/carlos-damota)

---

If you have any suggestions or feedback on my code, I’d be happy to receive it. Thanks for reviewing my project! 🚀

