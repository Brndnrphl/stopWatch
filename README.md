# Stopwatch App

This is a simple stopwatch web app built with HTML, CSS, and JavaScript. 

## Features

- Display hours, minutes, seconds, and milliseconds 
- Start button to begin the stopwatch
- Stop button to pause the stopwatch
- Reset button to reset the stopwatch to 00:00:00.00

## Usage

The app displays the current time in hours, minutes, seconds, and milliseconds. 

Click the Start button to begin the stopwatch. The time will increment by 1 millisecond every 10 milliseconds.

Click the Stop button to pause the stopwatch. 

Click the Reset button to reset the displayed time back to 00:00:00.00.

## Code Overview

- index.html - Contains the basic HTML structure
- style.css - Contains styling for the app 
- script.js - Contains the JavaScript logic
  - Uses setInterval() to increment the time every 10ms when start is clicked
  - Clears the interval on stop and reset clicks
  - Displays formatted time in the DOM

## Contributing

Pull requests are welcome. Feel free to open an issue for any bugs or ideas for new features.
