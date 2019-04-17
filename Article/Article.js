// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    console.log(domElement);
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".article");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.uptext = this.domElement.querySelectorAll(".expandButton")
    // Set a click handler on the expandButton reference, calling the expandArticle method.
   this.domElement.addEventListener("click",() => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log("click");
  }
}

//START HERE: 
//- Select all classes named ".article" and assign that value to the articles variable.  
let articles = document.querySelectorAll(".article");

//- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.
articles.forEach((section)=>{
  const allArts = new Article(section);
  console.log(section,"lets see");
});

//let articles;