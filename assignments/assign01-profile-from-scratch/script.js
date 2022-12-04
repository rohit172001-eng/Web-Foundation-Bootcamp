// returns the ele which matches css selector
const header = document.querySelector('.navbar');

// When scrolling is done
window.onscroll = function() {
    var top = window.scrollY; //returns no of pixels page is scrolled vertically
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}