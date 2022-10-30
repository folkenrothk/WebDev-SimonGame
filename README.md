# `CMPSC 302` Web Development: Simon Says Game
_Completed Spring 2022_

## Beep Boop; Beep Boop; BRR BRR BRR

Over the course of two weeks, this was built to be a reasonably-functional version of the hit Hasbro game, Simon.

### Original Project Requirements

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

Once the process finishes successfully, we're done!
