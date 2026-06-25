# WAPH - Web Application Programming and Hacking

## Individual Project 1: Front-end Web Development with a Professional Profile Website

**Instructor:** Dr. Phu Phung  
**Student:** Abhishek Rautela  
**Email:** rautelak@mail.uc.edu

![Abhishek Rautela headshot](images/headshot.png)

## Project Links

**Deployed website:** [https://RautelaAbhishek.github.io](https://RautelaAbhishek.github.io)  
**GitHub repository:** [https://github.com/RautelaAbhishek/RautelaAbhishek.github.io](https://github.com/RautelaAbhishek/RautelaAbhishek.github.io)

## Overview

This project is a professional profile website deployed on GitHub Pages. In the portfolio, I included APIs, JavaScript libraries and some basic JavaScript features as well as a page tracker. I used JQuery a  nd Bootstrap and put JavaScript files in a separate file and worked with cookies to allow the page to tell if it is the first visit of the user and when their last visit was.

## General Requirements

### Professional Profile Website

I created a personal website in `index.html`. The page includes my name, headshot, email contact feature, background summary, education, experience, and skills. I then deployed in on GitHub using GitHub actions

### WAPH Course Page

I created a separate course page, `waph.html` and added the basic course info as well as a link to it in the `index.html` page. 

## Non-technical Requirements

### Bootstrap Framework

I included a bootstrap CDN script into the main `index.html` and used that for styling the page.

### Page Tracker

I included a Flag Counter page tracker near the bottom of the homepage. by going to the link and copying over the tag using my selected options

## Technical Requirements

### jQuery and JavaScript Library

The project uses JQuery as well as Day.js and clock.js from the waph-phung github. The scripts were added in the body tag of `index.html`

### Digital Clock

I added a script to get an updating datetime in `script.js` using Day.js that updates every 500ms. 

### Analog Clock

I used the `clock.js` script from the course resources as well as the canvas tag to display the analog clock in the `index.html` page.

### Show/Hide Email

I added a function in `email.js` that checks to see if email is shown when the user clicks on the button. Then, it toggles whether the email is shown or not.

### Extra JavaScript Functionality

For the extra JavaScript functionality, I added a button that changes the background to a random color when clicked. This is not persistent so when the user refreshes the page it goes back to the default color. I did this by generating 6 different hex digits and combining them to get a hex color and then applying that to the background-color. 

## Public Web API Integrations

### Disclaimer

I included a disclaimer to reduce any legal issues I may encounter from using the public APIs. 

### JokeAPI

I integrated JokeAPI using the required `Any` category endpoint as mentioned:

```
https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit
```

I noticed that some jokes had a setup and delivery as well so I added a check for it and made the delivery have a line break inbetween the setup and delivery for better readability.

The page loads a joke when it loads or every 60 seconds.

### Cat Image API

I integrated The Cat API to display a random cat image:

```
https://api.thecatapi.com/v1/images/search
```

This loads an image of a cat when the page loads or when the user clicks the generate new image button.

## JavaScript Cookies

I implemented cookies to remember returning visitors. On a first visit, the site displays:

```text
Welcome to my homepage for the first time!
```

and on later visits it displays:

```text
Welcome back! Your last visit was <the date/time of last visit>
```

The cookie value is updated every time the visitor loads the page.

## Conclusion

This project helped me practice creating a complete front-end website with HTML, Bootstrap, JavaScript, jQuery, Day.js, cookies, and public API integration. I also got some experience in deploying onto GitHub Pages.
