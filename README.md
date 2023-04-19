# RPS-Game
![image](https://user-images.githubusercontent.com/118939854/232917126-2de1a733-9642-4d52-bad2-6122a450e5fb.png)

## The purpose with this project
This is a game of Rock, paper, scissors and was made for entertainment. The game is very user-friendly and simple.

The site targets young people as it is a very simple game it's perfect for a first gameing experience.

This website is the second of five projects that i get to do as a student in order for me to be handed a diploma by Code Institute in software development.
Required technologies for this project is HTML, CSS and JavaScript.

A live version of the website can be found here: https://apollon999.github.io/RPS-Game/

## Table of contents
* [UX](https://github.com/Apollon999/RPS-Game/edit/main/README.md#ux)
  - [User Demographic](https://github.com/Apollon999/RPS-Game/edit/main/README.md#user-demographic)
  - [User Goals](https://github.com/Apollon999/RPS-Game/edit/main/README.md#user-goals)
  - [Requirements](https://github.com/Apollon999/RPS-Game/edit/main/README.md#requirements)
* [Design](https://github.com/Apollon999/RPS-Game/edit/main/README.md#design)
  - [Colours](https://github.com/Apollon999/RPS-Game/edit/main/README.md#colours)
  - [Fonts](https://github.com/Apollon999/RPS-Game/edit/main/README.md#fonts)
* [Features](https://github.com/Apollon999/RPS-Game/edit/main/README.md#features)
  - [Features for the future](https://github.com/Apollon999/RPS-Game/edit/main/README.md#features-for-the-future)
* [Testing](https://github.com/Apollon999/RPS-Game/edit/main/README.md#testing)
* [Deployment](https://github.com/Apollon999/RPS-Game/edit/main/README.md#deployment)
* [Sources](https://github.com/Apollon999/RPS-Game/edit/main/README.md#sources)

# UX
## User Demographic
Due to it's extreme simplicity, this website is built for kids and is perfect as a first gaming experience.
Although i catch myself playing the game at times while solving a problem in my brain.

## User Goals
The goal is to have fun, you can play the game alone with the computer or of course play with a friend and see who beats the computer with the best margin.

## Requirements
The learner has a clear rationale for developing this project and has produced a fully functioning, well-documented, interactive web application for a real-life audience, with specific content rather than placeholders. There is a range of interactive features. Data validation and user feedback are all evident in the code and the working application. There are no logical errors in the code, and the application functions as expected.

Required technologies: HTML, CSS, JavaScript.

## Design 
My aim has been to create a clean looking website with matching colors and great functionality.
All the features are separated to easy understand the different sections.
The idea of the design is completely my own although i used help to execute the styling on the buttons.
Thanks to https://youtu.be/Nmaw6pBEsI8 .

### Colours
This colour palette was created using https://coolors.co/
![Skärmbild 2023-04-19 014721](https://user-images.githubusercontent.com/118939854/232928537-5b2f96d0-4f49-4a91-9264-c38a562288e9.png)
Default typography have been used.

## Features
RPS is a one-page game and consists of these sections:

* Header/Logo

The logo is fixed on top of the page and tells us what the game is all about, RPS stands for Rock,Paper Scissors and PvC stands for Player VS Computer. The lightning in the middle is taken from https://fontawesome.com/

* Buttons with onClick eventlisteners

The buttons have outstanding styling and hover effects and shows three different hand gestures for the three options.

* Scoreboard

The scoreboard is right under the buttons and shows the updated score of the player and the computer.

* Section that shows the choices made and shows the outcome

The winner section updates on every click to show who won the round and both picks. To be clear with who picked what i have used emojis before the display of the picks wich is a very simple way that does save a lot of room.

* Instructions to the game

The instructions are covered in a background with the color Azure and gives an easy description on how the game is played.

* Footer 

The footer tells us when the game whas created and by who, and also for what purpose.

All features are shown in the image below.
![Skärmbild 2023-04-19 020157](https://user-images.githubusercontent.com/118939854/232930192-4d31e7fc-cc47-48c4-9710-13c60fd7e117.png)

### Features for the future
* An online scoreboard and crown a weekly winner with the highest win-ratio.
* An Online section where you can compete with other humans online

## Testing 
Test of functionality and apperance have been done continually.
Tests has been done using different browsers and the testing of responsiveness on different screen devices has been done using Google DevTools.
DevTools has also been a key testing platform to the JavaScript code to see how the code responds before calling the functions.

### Main issues discovered 

1. Computer picked the same option every time

* Solution: I used the Math.Floor method to for the computer to pick a random number between 0-2 (0, 1, 2, three options)

2. The game responded in the command line in Google DevTools but not on the screen

* Solution: I added the playGame function for the onClick eventlisteners to act whenever i clicked a button.

Apart from these i have runned in to some minor issues wich easily was fixed.

## HTML 
No errors where returned when passing through the https://validator.w3.org/
![Skärmbild 2023-04-19 025320](https://user-images.githubusercontent.com/118939854/232938408-287f875f-e1d7-4726-b7ab-5a7d97ce3dcd.png)

## CSS
No errors found when passing the code through the https://jigsaw.w3.org/css-validator/validator 
![Skärmbild 2023-04-19 030227](https://user-images.githubusercontent.com/118939854/232939539-87b359da-89f3-403f-b4cd-92f518e2abec.png)

## Lighthouse testing
![Skärmbild 2023-04-19 030850](https://user-images.githubusercontent.com/118939854/232940686-a043b72a-811f-4348-bb3e-199fd4b074ee.png)

## Deployment
The live version of the page is deployed on Github pages.
The procedure for deployment followed the "Creating your site" steps provided in GitHub Docs.

1. Log into GitHub.
2. Locate the GitHub Repository that shall be deployed live.
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the ”GitHub Pages" section and click on the ”Check it out here!”
5. At the ”Source” section choose ”main” as Branch and root as folder and click ”Save”
6. The website will deploy and the pages refreshes to provide the live link to the project.

The whole development space for this project was Gitpod. To track the development stage and handle version control regular commits and pushes to GitHub has been conducted. The GitPod environment was created using a template provided by Code Institute.

## Sources
Sites that have provided great useful knowledge about JavaScript:

* https://www.freecodecamp.org/ 

* https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

* The code Institute learning material and the slack community

Many thanks!

Top screenshot in this ReadMe was made using:

http://ami.responsivedesign.is/

Best regards
