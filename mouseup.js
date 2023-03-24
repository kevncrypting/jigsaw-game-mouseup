// First thing I did was create 4 different variables and used either getElementById or querySelector
let yesButton = document.getElementById('yesButton'); // creates a variable called yesButton that points to the element with the ID 'yesButton'
let jigsawPicture = document.querySelector('img'); // creates a variable called jigsawPicture that points to the first img element on the HTML page
let heading = document.querySelector('h1'); // creates a variable called heading that points to the first h1 element on the HTML page
let innerHeading = document.querySelector('h3'); // creates a variable called innerHeading that points to the first h3 element on the HTML page

// creates a function called changeButton that when called will change the innerText of the yesButton as well as its backgroundColor
function changeButton() {
    yesButton.innerText = `DON'T LET GO! Bad things will happen if you let your mouseup...`;
    yesButton.style.backgroundColor = 'red';
}

// creates a function called changeEverything that when called will: 
function changeEverything() {
    jigsawPicture.setAttribute('src', 'https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/5efbf684f94017001c1dd8a7.png'); // changes the source attribute of the current img on the page to a new one
    heading.innerText = "GAME OVER! You let go of the button..." // changes the innerText of the heading variable (which points to the h1, see line 4)
    heading.style.fontFamily = "Rock Salt" // changes the fontFamily of the heading
    innerHeading.innerText = "Tsk tsk tsk..." // changes the innerText of the innerHeading (which is the h3, see line 5)
    heading.style.color = 'red'; // changes the font color of heading to red
    heading.style.fontSize = '60px'; // changes the font size of heading to 60px
}

yesButton.addEventListener('mousedown', changeButton); // adds an event listener to yesButton that calls the function changeButton on the event 'mousedown'
yesButton.addEventListener('mouseup', changeEverything); // adds an event listener to yesButton that calls the function changeEverything on the event 'mouseup'