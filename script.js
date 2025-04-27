window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, 3000);
  });
function scrollToElement(elementSelector, instance = 0) {
  
    const elements = document.querySelectorAll(elementSelector);
 
    if (elements.length > instance) {
     
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");


link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
  
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});


