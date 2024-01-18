//popular reads 
async function popularreads() {
    try {
    const response = await fetch('https://gutendex.com/books/?download_count');
    if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
    const data = await response.json();
    let books = "";
    for (let i = 0; i < 3; i++) {
      books += `<div class="item">
      <img src=${data.results[i].formats['image/jpeg']} alt="Book Cover">
         <h3>${data.results[i].title}</h3>
      <p>${data.results[i].authors[0].name}</p>
      <p><a href=${data.results[0].formats['text/html']}>read book</a></p>
      <p>download count:${data.results[i].download_count}<p>
  </div>`      
    }
    document.getElementById("popbooks").innerHTML=books;
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
popularreads();
//children book
async function childrenbook() {
    try {
    const response = await fetch('https://gutendex.com/books/?topic=children ');
    if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
    const data = await response.json();
    let bookz= "";
        for (let i = 0; i < 3; i++) {
          bookz += `
          <div class="item">
             <ul class="no-bullets" >
      <li><img class="cover-thumb"src=${data.results[i].formats['image/jpeg']} alt="Book Cover">${data.results[i].title}
      <p><a href=${data.results[0].formats['text/html']}>read book</a></p></li>
      <p>download count:${data.results[i].download_count}<p>
     </ul>                   
    </div>      
       `}
        document.getElementById("bookscategory").innerHTML=bookz;
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
childrenbook();
//history book
async function historybook() {
    try {
    const response = await fetch('https://gutendex.com/books/?topic=history');
    if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
    const data = await response.json();
    let history= "";
      for (let i = 0; i < 3; i++) {
        history += `
        <div class="item">
           <ul class="no-bullets" >
    <li><img src=${data.results[i].formats['image/jpeg']} alt="Book Cover">${data.results[i].title}
    <p><a href=${data.results[0].formats['text/html']}>read book</a></p></li>
    <p>download count:${data.results[i].download_count}<p>
    </ul>                   
    </div>      
     `}
      document.getElementById("History").innerHTML=history;
    
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
historybook();
//science book
async function sciencebook() {
    try {
    const response = await fetch('https://gutendex.com/books/?topic=science');
    if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
    const data = await response.json();
    let science= "";
  for (let i = 0; i < 3; i++) {
    science += `
    <div class="item">
       <ul class="no-bullets" >
<li><img src=${data.results[i].formats['image/jpeg']} alt="Book Cover">${data.results[i].title}
<p><a href=${data.results[0].formats['text/html']}>read book</a></p></li>
<p>download count:${data.results[i].download_count}<p>
</ul>                   
</div>      
 `}
  document.getElementById("science").innerHTML=science;
    
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
sciencebook();
//technology book
async function technologybook() {
    try {
    const response = await fetch('https://gutendex.com/books/?topic=technology');
    if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
    const data = await response.json();
    let technology= "";
  for (let i = 0; i < 3; i++) {
    technology += `
    <div class="item">
       <ul class="no-bullets" >
<li><img src=${data.results[i].formats['image/jpeg']} alt="Book Cover">${data.results[i].title}
<p><a href=${data.results[0].formats['text/html']}>read book</a></p></li>
<p>download count:${data.results[i].download_count}<p>
</ul>                   
</div>      
 `}
  document.getElementById("Technology").innerHTML=technology;
    
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
technologybook();
// search books
function searchbook(event) {
    event.preventDefault();
    const searchQuery = document.getElementById("search").value;
    fetch(`https://gutendex.com/books/?topic=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
       result.innerHTML=`Search result for 10 popular ${searchQuery} books`
        searchForm.innerHTML = "";
        let resultz= "";
        for (let i = 0; i < 10; i++) {
          resultz += `
          <div class="item">
             <ul class="no-bullets" >
      <li><img class="cover-thumb"src=${data.results[i].formats['image/jpeg']} alt="Book Cover">${data.results[i].title}
      <p><a href=${data.results[0].formats['text/html']}>read book</a></p></li>
      <p>download count:${data.results[i].download_count}<p>
      </ul>                   
      </div>      
       `}
        booksearch.innerHTML=resultz;
      })
      .catch(error => {
        console.error(error);
      });
  }
  const searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", searchbook);
  const booksearch=document.getElementById("booksearch");
  const result=document.getElementById("results");
  //function to submit comments
  function submitComment() {
    const comment = document.getElementById("comment").value;
    document.getElementById("comment").value = "";
    const commentSection = document.getElementById("comment-section");
    const newComment = document.getElementById("pcomments");
    newComment.innerText = comment;
    commentSection.appendChild(newComment);
    localStorage.setItem("comment", comment);
  }
  
  document.getElementById("submitcomment").addEventListener("click", submitComment);
//fucntion to store commentSection
  window.onload = function () {
    const comment = localStorage.getItem("comment");
    if (comment) {
      const commentSection = document.getElementById("comment-section");
     const newComment = document.getElementById("pcomments");
      newComment.innerText = comment;
      commentSection.appendChild(newComment);
      
    }
  };