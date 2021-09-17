const observer = new IntersectionObserver(elems => {
    elems.forEach(elem => {
      if (elem.isIntersecting) {
        elem.target.classList.add('in-view');
      }
    });
  });
  
document.querySelectorAll('.progress-fill')
.forEach(el => observer.observe(el));


  