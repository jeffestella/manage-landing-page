# Overview
This is my attempt at the front-end web dev challenge ['Manage Landing Page' from Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5/hub/manage-landing-page-W2koFkhe5). Below are the challenge brief and style guide provided by Frontend Mentor, as well as my own reflections on what I've learned completing this project.

# Brief
Build a landing page based on a given design (screenshots found in `/designs` folder).
Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

# Front-end Style Guide
## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Bright Red: hsl(12, 88%, 59%)
- Dark Blue: hsl(228, 39%, 23%)

### Neutral

- Dark Grayish Blue: hsl(227, 12%, 61%)
- Very Dark Blue: hsl(233, 12%, 13%)
- Very Pale Red: hsl(13, 100%, 96%)
 Vary Light Gray: hsl(0, 0%, 98%)

## Typography

### Body Copy

- Font size: 16px

### Font

- Family: [Be Vietnam](https://fonts.google.com/specimen/Be+Vietnam)
- Weights: 400, 500, 700

## Icons

For the social icons, you can use the icons provided or a font icon library. Some suggestions for font icon libraries can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)

---
# Jeff's Notes
## Thoughts
- Seems better to use calculated values (ie. `%`, `vh`, and `vw`) for larger, more "parental" elements that dynamically rearrange the entire site. And make smaller, discreet components in fixed or narrowly-`clamp`'ed sizes. 
- Ideal carousel design for this project: centered card, cut-off flanking cards. Clicking on flanking card centers it by scroll position (snap scrolling)
- I can see why folks insist on designing for mobile first. Seems a lot easier to scale a mobile design up to tablet/desktop than to scale a desktop design down to mobile.

## New Things Learned
- `counter()` property in css allows us to make custom styled ordered lists
- `<article>` tags should be used for independent, discreet, groups of information that are designed to be reused in syndication — eg. product cards, blog post listing, etc.
- `create-react-app` gets rid of default browser css margin with `body{margin:0}` in `index.css`
- Using pseudo-elements, specifically `::before`. I need to actually set width and height for them to appear
- `<nav>` should only be used for a list of navigation links. I should use the `<header>` tag for the actual navbar element as a whole.
- `border-style: solid` removes the default inner/inset shadow of `<input>` tags
- You can use CSS `::placeholder` pseudoelement to style placeholder text in `input` tags
- `:invalid` pseudoelement can be used to style an invalid HTML5 form validation. 
- `:not()` pseudoelement can be used to further add further logic to css pseudo-elements. They can also be strung together with an implied "and" between them
	- eg. `:not(focus):not(placeholder-shown):invalid` means a form is: not focused AND placeholder is not shown AND invalid
	- see [this CSStricks article](https://duckduckgo.com/?q=css+how+to+style+validation+error&t=ffab&ia=web) for more details
- The [`background-position`](https://css-tricks.com/almanac/properties/b/background-position/) property can be used to move a background image within its element
- Used the `react-elastic-carousel` package to implement the carousel in `SectionTestimonials` 