let news = {
  apiKey: "&apiKey=1YP7UBvFk7kGySFoTP-UlCjC88qsE7PQExPbH10M5JbR3NhM",
  
  fetchNews: function(keywords){
    
    fetch(
      'https://api.currentsapi.services/v1/latest-news?&keywords=' +
       keywords +
       this.apiKey
         )
    
      .then((response) => {
       if(!response.ok){
         alert("no news found");
       }
      return response.json();
      
    })
      
      .then((data) => this.displayNews(data));
    
    
     
  },
  

  
  
  displayNews: function(data){
  
    
   //1st newspaper story
   const title = document.getElementById("title");
   title.textContent = data.news[0].title   
    
   const author = document.getElementById("author");
   author.textContent = data.news[0].author
    
   const description = document.getElementById("description");
   description.textContent = data.news[0].description
 
    
    
    //2nd newspaper story
    const title2 = document.getElementById("title2");
    title2.textContent = data.news[1].title  
    
    const author2 = document.getElementById("author2");
    author2.textContent = data.news[1].author
    
    const description2 = document.getElementById("description2");
    description2.textContent = data.news[1].description
    
    
    //3rd newspaper story
    const title3 = document.getElementById("title3");
    title3.textContent = data.news[2].title  
    
    const author3 = document.getElementById("author3");
    author3.textContent = data.news[2].author
    
   const description3 = document.getElementById("description3");
   description3.textContent = data.news[2].description
      
  
    
    },
  search: function() {
    this.fetchNews(document.querySelector(".search-bar").value);
 },  
  
 
};

document.querySelector(".searchButton").addEventListener("click", function () {
  news.search();
});


document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      news.search();
    }
  });



//handles the 1st full story click button
function newWindow() {
      
      const input = document.getElementById("searchBar")
        fetch(
          'https://api.currentsapi.services/v1/latest-news?&keywords='+
           input.value +
          "&apiKey=1YP7UBvFk7kGySFoTP-UlCjC88qsE7PQExPbH10M5JbR3NhM"
        )
        .then(response => response.json())
        .then((data) => {
            window.open(data.news[0].url);
        })
        .catch((error) => console.error("oops:",error));
    }

//handles the 2nd full story click button

function newWindow2() {
      
      const input = document.getElementById("searchBar")
        fetch(
          'https://api.currentsapi.services/v1/latest-news?&keywords='+
           input.value +
          "&apiKey=1YP7UBvFk7kGySFoTP-UlCjC88qsE7PQExPbH10M5JbR3NhM"
        )
        .then(response => response.json())
        .then((data) => {
            window.open(data.news[1].url);
        })
        .catch((error) => console.error("oops:",error));
    }

//handles the 3rd full story click button
function newWindow3() {
      
      const input = document.getElementById("searchBar")
        fetch(
          'https://api.currentsapi.services/v1/latest-news?&keywords='+
           input.value +
          "&apiKey=1YP7UBvFk7kGySFoTP-UlCjC88qsE7PQExPbH10M5JbR3NhM"
        )
        .then(response => response.json())
        .then((data) => {
            window.open(data.news[2].url);
        })
        .catch((error) => console.error("oops:",error));
    }
