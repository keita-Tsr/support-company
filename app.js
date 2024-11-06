  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollBtn").style.display = "block";
    } else {
      document.getElementById("scrollBtn").style.display = "none";
    }
  }
  
   function scrollToTop() {
    // safari
    document.body.scrollTop = 0; 
    // chrome,firefox etc
    document.documentElement.scrollTop = 0; 
  }
