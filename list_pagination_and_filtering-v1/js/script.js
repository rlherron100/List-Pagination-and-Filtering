/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const listItem = document.getElementsByClassName('student-item cf');
const pageMax = 10;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage(list, page) {
   const startIndex = (page * pageMax) - pageMax;
   const endIndex = (page * pageMax) - 1;
      for (let i = 0; i < list.length; i++)
         if ( i >= startIndex && i <= endIndex) {
         list[i].style.display = '';  
         } else {
            list[i].style.display = 'none';
         }
};






/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

/***  There are three sections to this function. 
1. generate required DOM elements
2. append appropriate elements to their respective parent elements
3. add click even listener functionality to each li (page) element.active
***/

/*
1. Determine how many pages are needed for the list by dividing the
total number of list items by the max number of items per page
2. Create a div, give it the “pagination” class, and append it to the .page div
3. Add a ul to the “pagination” div to store the pagination links
4. for every page, add li and a tags with the page number text
5. Add an event listener to each a tag. When they are clicked
call the showPage function to display the appropriate page
6. Loop over pagination links to remove active class from all links
7. Add the active class to the link that was just clicked. You can identify that
clicked link using event.target
*/



function appendPageLinks (list) {
   let pageNum = list.length / pageMax;
   let div = document.createElement("div");
   let ul = document.createElement("ul");
   let li = document.createElement('li');
   let a= document.createElement('a');

   div.page.appendChild('div');
   div.appendChild('ul');

   for (let n=1; n<(pageNum); n++) {
      // let pNumber = document.createTextNode(`${n}`);
      ul.appendChild('li')
      li.appendChild('a');
      a + "href= #" 
      a.document.createTextNode(n);
   }

}

appendPageLinks(listItem);




// Remember to delete the comments that came with this file, and replace them with your own code comments.