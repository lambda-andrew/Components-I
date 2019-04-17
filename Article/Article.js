class Article {
  constructor(article) {
    this.article = article;
    this.expandButton = this.article.querySelector('.expandButton');
    this.closeButton = this.article.querySelector('.close');
    this.expandButton.addEventListener('click', this.expandArticle);
  }
expandArticle() {
  console.log('CLICKED!!!!!');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll('.article');

articles.forEach((article) => {
  const openArticle = new Article(article)
});

//console.log(articles);