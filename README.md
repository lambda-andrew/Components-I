# Newsfeed-Components

In this project we are going to be building a news feed reader. The goal is to have a collapsing menu, and expandable news articles. The HTML and CSS is already done for you, you simply need to connect the pieces. After the CSS is connected it is time to move on to building out our components using JavaScript. We will be adding common functionality and styling to build reusable components.

### Need to know:
* CSS (LESS):
  * @import
* JavaScript:
  * ES6 classes and the constructor function.
* DOM
  * Element selection
  * Basic DOM manipulation
  * Events and event listeners

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [/] Clone your OWN version of the repository.
* [/] Create a new branch: git checkout -b `<firstName-lastName>`.
* [/] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [/] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

* [/] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
* [/] Add your project manager as a reviewer on the pull-request
* [/] Your project manager will count the project as complete by merging the branch back into master.

### Preprocessor Setup

  * Run `less-watch-compiler less css index.less` from the top level of the Newsfeed-Components folder. 
  * Open index.html in your browser
  * [/] Task Complete


### Part 1: The Menu

* Import `Menu.less` from the correct path into index.less (follow the example for `Header.less` if you’re not sure how to write the correct path)
* Follow the instructions found in the Menu.js file to complete the JavaScript functionality.  NOTE: Start near the bottom of the page by looking for 
`const menu`.

* [/] Task Complete

### Part 2: The Articles Component
* Import `Article.less` from the correct path into index.less (follow the example for `Header.less` if you’re not sure how to write the correct path)
* Follow the instructions found in the Articles.js file to complete the JavaScript functionality.  NOTE: Start near the bottom of the page by looking for `let articles`.

* [/] Task Complete

### Part 3: Add Articles

* Now that we have our components built, add a few articles of your own to the HTML. Notice how our JavaScript code automatically selects the new articles and adds the styling and functionality we just built to them. This is the power of components. Write the code once and add as many components as you want all while maintaining the functionality we built!
