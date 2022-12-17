var doc = document;
doc.addEventListener('click',handleDoc);
doc.addEventListener('mouseover',handleMouseOver);
var elLink = document.getElementById('link');
elLink.addEventListener('click', handleClickLink);
function handleDoc (e) {
  switch (true) {
    case (e.target.matches('.table-row')): handleRowClick(e);break;
    case (e.target.matches('#btn')): handleBtnClick(e);break;

  }
}
function handleRowClick(e) {
  console.log('Row clicked');
  window.open("https://www.google.com")
}
function handleBtnClick (e) {
  console.log('Btn Clicked');
  window.open("https://www.youtube.com")
}
function handleMouseOver (e) {

  if (e.target.matches('#div'))
  {
    e.target.style.backgroundColor="gray";
  }
}
function handleClickLink (e) {
  e.preventDefault();
  e.stopPropagation();

  console.log('target', e.target);
}
