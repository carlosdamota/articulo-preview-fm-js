# Frontend Mentor - Article Preview Component

# Frontend Mentor - Article Preview Component

This is my solution to the [Article Preview Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). This project helped me improve my skills in responsive design and DOM manipulation using JavaScript.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size.
- See the social media share links when they click the share icon.

### Screenshot

![Desktop Preview](./assets/images/Desktop%20(3).png)
![Desktop Share Preview](./assets/images/Desktop%20share%20buttons.png)
![Mobile Preview](.//assets/images/Mobile.png)
![Mobile Share Preview](.//assets/images/Mobile%20share%20buttons.png)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/article-preview-component-using-css-nesting-and-js-dom-manipulation)
- Live Site URL: [GitHub Pages](https://carlosdamota.github.io/article-preview-component/)

## My Process

### Built With

- Semantic HTML5
- CSS with native nesting (no preprocessors like SASS/SCSS)
- Flexbox and CSS Grid
- Mobile-first workflow
- Vanilla JavaScript for DOM manipulation

### What I Learned

This project was a great opportunity to practice **CSS nesting** and **JavaScript DOM manipulation**. Here are some key takeaways:

1. **CSS Nesting**:
   - I learned how to structure CSS using native nesting, which helped me organize my styles better without relying on preprocessors.
   - Example:
     ```css
     .card {
       background: white;
       border-radius: 0.7em;

       &__image {
         width: 100%;
         height: 16em;
         overflow: hidden;
       }
     }
     ```

2. **JavaScript DOM Manipulation**:
   - I implemented a simple toggle function to show/hide the share button.
   - Example:
     ```javascript
    const btnOn= document.getElementsByClassName("share-btn")[0];
    const btnOff= document.getElementsByClassName("share-btn")[1];
    const userInfo = document.getElementsByClassName("user-info")[0];
    const shareContainer = document.getElementsByClassName("share-container")[0];

    function share() {
    userInfo.classList.toggle("user-info-off");
    shareContainer.classList.toggle("share-container-off");
    }

    btnOn.addEventListener("click", share);
    btnOff.addEventListener("click", share);

     ```

3. **Responsive Design**:
   - I used a mobile-first approach and media queries to ensure the component looks great on all devices.

### Continued Development

While I'm proud of what I accomplished, there are areas I'd like to improve:

1. **Accessibility**:
   - Add proper ARIA attributes and keyboard navigation.
   - Improve screen reader compatibility.

2. **Code Organization**:
   - Use CSS variables for repeated values like colors and spacing.
   - Refactor JavaScript to make it more modular and reusable.

3. **Animations**:
   - Add smooth transitions for the share toolbar toggle.

### Useful Resources

- [CSS Nesting Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Nesting) - Helped me understand native CSS nesting.
- [JavaScript DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) - A great reference for working with the DOM.
- [Frontend Mentor](https://www.frontendmentor.io) - For providing the challenge and design files.

## Author

- GitHub - [@carlosdamota](https://github.com/carlosdamota)
- Frontend Mentor - [@carlosdamota](https://www.frontendmentor.io/profile/carlosdamota)
- LinkedIn - [Carlos Damota](https://www.linkedin.com/in/carlos-damota)

---

If you have any feedback or suggestions, feel free to reach out! I'm always looking to improve my skills. 😊
