# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- SASS
- CSS Flexbox
- CSS Grid
- Mobile-first workflow
- Webkit

### What I learned

Custom Scrollbar

```css
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: $Soft-orange;
  border-radius: 5px;
}
```

Slide out hamburger menu

```html
<nav class="navbar">
  <div class="nav-brand">
    <img src="./assets/images/logo.svg" alt="" />
  </div>
  <div class="navbar-toggle">
    <img src="./assets/images/icon-menu.svg" alt="" />
  </div>
  <div class="nav-list">
    <div class="close-list">
      <img src="./assets/images/icon-menu-close.svg" alt="" />
    </div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">New</a></li>
      <li><a href="#">Popular</a></li>
      <li><a href="#">Trending</a></li>
      <li><a href="#">Categories</a></li>
    </ul>
  </div>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
}

.navbar-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}

.nav-list {
  position: fixed;
  top: 0;
  right: -100%;
  width: 70%;
  height: 100vh;
  background-color: $Off-white;
  transition: right 0.4s ease-in;

  &.active {
    right: 0;
  }
}
```

```js
const navbarToggle = document.querySelector(".navbar-toggle");
const navList = document.querySelector(".nav-list");

navbarToggle.addEventListener("click", () => {
  navList.classList.add("active");
});

document.querySelector(".close-list").addEventListener("click", () => {
  navList.classList.remove("active");
});
```

Making an element to stay square by setting the height according to it's width

```css
& .image {
  background: url("./assets/images/image-web-3-mobile.jpg") no-repeat;
  padding-left: 100%;
  padding-bottom: 100%;
}
```

### Continued development

- Grid
- Img adjustment
- Webkit

## Author

- Frontend Mentor - [@Seconds-bit](https://www.frontendmentor.io/profile/Seconds-bit)
- Twitter - [@ancaadri9](https://www.instagram.com/ancaadri9)
