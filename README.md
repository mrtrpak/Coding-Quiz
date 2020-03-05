# Coding-Quiz

#### Table of Contents
1. [Description](#Description)
2. [App Guideline](#Application-Guideline)
3. [Difficulties](#Difficulties)
4. [Link](https://mrtrpak.github.io/Coding-Quiz/)
5. [Photos](#Photos)

## Description

As a coding bootcamp student I want to build a quiz app that will challenge my fellow peers and show the javascript knowledge I know and able to implement into the app.

## Application Guideline

In this app once the user clicks "start quiz" the quiz screen with questions and the possible choices will come up. At that point the timer will start and count down by 1 every second. 

Once a choice is clicked on there will be a prompt showing if that was correct or incorrect. If it was incorrect there will be a 15 second penalty deducted from the timer. Then the next question will show.

This will continue through all of the questions

Once the quiz has ended or the the timer has run out a screen will appear showing the score. The score is equal to the amount of seconds on the timer left. The user then can enter their initials and this will be saved to the local storage with the score.

## Difficulties

I came across a few obstacles when I was making this app. One issue I was struggling with how was I going to get the the answer options to show in the html. I at first was going to dynamically generate the buttons that hold the information for the choices, but I had trouble getting a click listener to work doing that. I decided to simplify the problem by instead of creating the buttons and the text into it I had the buttons already to call on and just replaced the text in them. I also had an issue getting the prompt of wrong/correct to show after the user selected a choice. The issue was the rest of the code would run through before the user could see if they got it wrong or right. I was able to add a setTimeout to delay for a second so it is easy to notice the prompt now. 

## Tools Used

- HTML5
- CSS3
- Javascript

## Link

[Coding Quiz](https://mrtrpak.github.io/Coding-Quiz/)

## Photos

![website photo](/photos/homepage.png)

![score screen photo](/photos/scorescreen.png)
