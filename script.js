
const listItem = document.getElementsByClassName('student-item cf'); //gives listItem the value of all elements with the class name student-item cf
const pageMax = 10; //caps the number of students per page at 10


function showPage(list, page) { 
   const startIndex = (page * pageMax) - pageMax; //startIndex becomes 0 if the page is 1, 10 if page is 2, etc.
   const endIndex = (page * pageMax) - 1; //endIndex becomes 9 if page is 1, 19 if page is 2, etc.
      for (let i = 0; i < list.length; i++)  //for loop will run through the entire number of list items before stopping
         if ( i >= startIndex && i <= endIndex) {
         list[i].style.display = '';    //displays all list items within the range of startIndex' value and endIndex' value
         } else {
            list[i].style.display = 'none'; //hides all list items not contained within the start and end Index values.
         }

};



function appendPageLinks (list) { 
   let pageNum = Math.ceil(list.length / pageMax) //calculates the amount of pages that will be added based on the amount of list items divided by 10 and rounded up.
   let page = document.querySelector('.page'); //calls out the div element with the class name .page
   let paginationDiv = document.createElement('div'); //creates the pagination div that will wrap around the pagination links
   paginationDiv.className= 'pagination'; //gives class name .pagination to paginationDiv
   page.appendChild(paginationDiv);  //appends paginationDiv to the .page div
   let ul = document.createElement('ul');  //creates a ul element to be placed as a child of the pagination div, this is kept out of the for loop because it is not added per list item
  

   paginationDiv.appendChild(ul); //appends ul to the pagination div
   for (let n=1; n<=pageNum; n++) {  //n represents the number of the page link displayed
      let li = document.createElement('li');  //adds an li each time the loop runs, the loop stops when it reaches the max number of pages.
      ul.appendChild(li)  //appends the li elements to the ul element
      let a= document.createElement('a'); // creates anchor element 
      a.textContent=n; //makes the text content of the anchor element the respective number for that page
      a.href='#'; //makes the anchor element link to the appropriate showPage page
      li.appendChild(a) //appends the anchor to its respective li element
      
   if (n === 1) {
      a.className = 'active' //this conditional is true the first time the for loop runs, i.e. when the page first loads, making page 1 the default
      }
      
   a.addEventListener('click', (x) => {
         showPage(listItem, n) //shows the page clicked
         let clickedPageNum = document.querySelector('.active'); //creates variable for class .active
         clickedPageNum.classList.remove('active'); //removes the active class from the previous page link
         x.target.classList.add('active'); //adds the active class to the link that is clicked
      })
   }}


showPage(listItem, 1); //displays page 1 as the default when the app first loads
appendPageLinks(listItem); //puts the listItem index into the function and calls it
