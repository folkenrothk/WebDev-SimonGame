# `CMPSC 302` Web Development, Week 4: Basic Javascript (i.e. Simon)

* Assigned: 30 March 2022, 1:30 PM
* Due: 10 April 2022, 11:59 PM

## Beep Boop; Beep Boop; BRR BRR BRR

Your goal over the course of the next two weeks is to build a reasonably-function version of the hit Hasbro game, Simon.

[![It was LIT](https://img.youtube.com/vi/G6p7zRsECaI/maxresdefault.jpg)](https://www.youtube.com/watch?v=G6p7zRsECaI)

To do this, we will learn the basics of Javscript, namely `events` and `functions`. This will fall in line with our understanding
that HTML and CSS largely _mean_ things and that Javascript _does_ things. However, there are a few steps that we'll look at along
the way, namely:

|Step |Expected Date |
|:----|:-------------|
|Design (incl. mobile)| EOD, 1 April 2022 |
|Functionality (i.e. playing the game| 10 April 2022 |

The above means that we'll likely get to actually _playing_ the game in the second week of the assignment. Our first goal is to
make the game UI workable. To do this, there are a few requirements.

### Requirements

#### Design

* Full UI containing:
  * 4 multicolored `<button>`s in either a "radial" (i.e. circle) design _or_ square grid design
  * a footer which displays game name, `Start` button, and score
* `<button>`s must be given IDs:
  * `top-left`
  * `top-right`
  * `bottom-left`
  * `bottom-right`
  * `start-button`
* The score display in the footer should be give the ID `points` (see above for required contents)
* The design should be fully responsive, changing form when we hit the mobile "breakpoint", defined here as `1024px` (this definition varies)

##### Wireframes

Tradtionally, when working on designs in the web space, you'll develop or be given "wireframes." These can range from sparse to dense in 
information population. For the purposes of our assignment, they're relatively general.

###### Desktop

![On yr main](https://allegheny-computerscience-302-s2022.github.io/cmpsc-302-week-4-basic-javascript-solution/media/desktop-wireframe.png)

###### Mobile

![On the Go](https://allegheny-computerscience-302-s2022.github.io/cmpsc-302-week-4-basic-javascript-solution/media/mobile-wireframe.png)

#### Functionality

(Note: all functionality should be dictated by the `scripts/ui.js` file.)

* Game "activates" when `Start` button clicked
  * This should convert the "Press Start to Play" text to a "Points: ##" display (where `##` is the varying number of points
* The game should generate random patterns that increase by 1 additional step after each "successful" round
  * Here, "successful" means that a player achieved the demonstrated pattern in the given amount of time
* The player's turn "fails" if they take more than `5 * level` seconds to enter any one part of the pattern
  * `level` should be taken to mean the number of steps in the pattern
* On each successfuly turn, a player's score should increase by `1`
* If a player fails to complete the pattern, the start button should turn a "Game Over" button, and the game should stop.

## Making a GitHub Pages page

This assignment also requires you to make your work available via GitHub Pages. For a primer on where to find it
and how to do it:

- [ ] locate and click the `Settings` tab at the top of the screen
- [ ] from the menu at the left, select `Pages`
- [ ] locate the "Source" heading; set the "Branch" as `main`, and change the second drop-down to `/docs`
- [ ] click `Save`
- [ ] One last step: make the page _public_ by setting `GitHub Pages visibility` to `Public`
  * This step is _required_ for your HTML and CSS to pass validation!
A green box will appear at the top of the page listing the random URL that you've been assigned. This is your
URL!

## Accepting the assignment

- [ ] Using either the link posted to our class Discord or the [course schedule](https://cmpsc302.chompe.rs)
- [ ] Click the link provided for the lab assignment and accept it in GitHub classroom
- [ ] Once the assignment finishes building, click the link to go to your personal repository assignment

## "Cloning" a repository

### Using the correct download link

- [ ] On this repository's page, click the `Clone or download` button in the upper right hand corner
* You may need to scroll up to see it
- [ ] In the upper right corner of the box that appears, click `Use SSH`
- [ ] Copy the link that appears in the textbox below the phrase "Use a password with a protected key."

#### Cloning

* [ ] Type `ls` in your terminal window
* You should be in your `~` directory
- [ ] Find the folder you've made to hold class assignments (may involve `cd`ing)
- [ ] Once there, "clone" the repository using the link copied above
  * If I (the instructor) were to clone my own repository, I'd enter (your link will look different):

```
git clone git@github.com:Allegheny-ComputerScience-302-S2022/cmpsc-302-week-3-basic-style-exercises.git
```

## Wrap-up

### Submitting the assignment/saving progress

The GitHub platform is a place to store your work. So, it makes some sense that should be able to _clone_ (download) from it, and push back (upload) to it. Here, we'll learn this second part.

- [ ] `cd` to your `~` folder
- [ ] Locate your `cmpsc-302-week-3-basic-style-exercises` folder and `cd` to it.

Once in this folder, we need to tell git that there have been changes.

- [ ] Type `git add -A` and press `Enter`
* This tells git to look through the _entire_ folder structure for new changes and "stage" them

- [ ] Type `git commit -m "YOUR COMMIT MESSAGE"` to "label" the commit
* This is typically something like `git commit -m "Fixing a typo"` -- the message in quotes should be as descriptive as possible, while still remaining somewhat short

- [ ] To send all changes to the server, type `git push`
- [ ] At the prompt, input the password associated with the `SSH Key` you created earlier in this exercise (yesterday)

Once the process finishes successfully, we're done!
