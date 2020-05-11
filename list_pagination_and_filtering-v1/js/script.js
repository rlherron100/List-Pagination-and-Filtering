
const listItem = document.getElementsByClassName('student-item cf');
const pageMax = 10;


function showPage(list, page) {
   const startIndex = (page * pageMax) - pageMax;
   const endIndex = (page * pageMax) - 1;
      for (let i = 0; i < list.length; i++)
         if ( i >= startIndex && i <= endIndex) {
         list[i].style.display = '';  
         } else {
            list[i].style.display = 'none';
         }
         page++;
};



function appendPageLinks (list) {
   let pageNum = Math.ceil(list.length / pageMax)
   let page = document.querySelector('.page');
   let paginationDiv = document.createElement('div');
   paginationDiv.className= 'pagination';
   page.appendChild(paginationDiv);
   let ul = document.createElement('ul');
   
   paginationDiv.appendChild(ul);
   for (let n=1; n<=pageNum; n++) {
      let li = document.createElement('li');
      ul.appendChild(li)
      let a= document.createElement('a');
      a.textContent=n;
      a.href='#';
      li.appendChild(a)
   }

   if (n === 1) {
      a.className = 'active'
   }

 a.addEventListener('click', (x) => {
   let clickedPageNum = document.querySelectorAll('.active');
   clickedPageNum.classList.remove('.active');
   x.target.classList.add('active');
   showPage(listItem, a.target.textContent)
 })
}
showPage(listItem, 1)
appendPageLinks(listItem);

